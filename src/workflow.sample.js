/* Public PORTFOLIO-only demo; no browsing, form filling or user data. */
'use strict';
function text(v){return String(v ?? '').normalize('NFKC').trim().replace(/\s+/g, ' ');}
function norm(v){return text(v).toLowerCase();}
function cleanUrl(raw){
  try {
    const u=new URL(raw);
    if (!['https:', 'http:'].includes(u.protocol)) return '';
    for (const key of [...u.searchParams.keys()]) if (/^(utm_.+|fbclid|gclid)$/i.test(key)) u.searchParams.delete(key);
    u.hostname=u.hostname.toLowerCase();
    return u.toString();
  } catch {return '';}
}
function sameJob(a,b){
  const ac=norm(a.company),bc=norm(b.company),ap=norm(a.position),bp=norm(b.position);
  if (ac && bc && ap && bp && ac===bc && ap===bp) return true;
  const au=cleanUrl(a.url),bu=cleanUrl(b.url);
  return !!(au && au===bu && /(?:\/job\/|jobid=|position\/|postid=)/i.test(au));
}
function upsert(records,entry){
  const out=records.map(r=>({...r}));
  const idx=out.findIndex(r=>sameJob(r,entry));
  if (idx<0){out.push({...entry,status:entry.status||'待核实'});return {records:out,created:true};}
  out[idx]={...out[idx],...entry};return {records:out,created:false};
}
function missingAnswers(fields,profile){
  return fields.filter(f=>f.required && !(profile[f.key] && String(profile[f.key]).trim()))
    .map(f=>({key:f.key,question:f.label||f.key}));
}
module.exports={sameJob,upsert,missingAnswers,cleanUrl};
