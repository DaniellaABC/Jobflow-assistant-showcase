const assert=require('node:assert/strict');
const {sameJob,upsert,missingAnswers,cleanUrl}=require('./workflow.sample');
assert.equal(sameJob({company:'示例 公司',position:'商业分析师'}, {company:'示例公司',position:'商业分析师'}),false); // company spacing needs explicit normalization policy
assert.equal(sameJob({company:'示例公司',position:'商业分析师'}, {company:'示例公司',position:'商业分析师'}),true);
assert.equal(sameJob({url:'https://jobs.example.org/job/123?utm_source=a'}, {url:'https://jobs.example.org/job/123?utm_source=b'}),true);
assert.equal(cleanUrl('javascript:alert(1)'), '');
const a=upsert([],{company:'示例公司',position:'分析师',status:'待核实'});
assert.equal(a.records.length,1);
const b=upsert(a.records,{company:'示例公司',position:'分析师',status:'已提交'});
assert.equal(b.records.length,1);assert.equal(b.records[0].status,'已提交');
assert.deepEqual(missingAnswers([{key:'school',required:true,label:'学校'}, {key:'email',required:true}],{email:'x@example.com'}),[{key:'school',question:'学校'}]);
console.log('Portfolio demo unit tests passed');
