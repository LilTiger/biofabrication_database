import {get} from './http'

// 论文发表趋势
export const getHotPaper = params => get('/HotspotAnalysis/paper',params).then(res=>{
  return res
})


// 投入机构趋势
export const getHotOrg = params => get('/HotspotAnalysis/org',params).then(res=>{
  return res
})

// 期刊发表趋势
export const getHotJournal= params => get('/HotspotAnalysis/journal',params).then(res=>{
  return res
})


//被引用趋势
export const getCited= params => get('/HotspotAnalysis/cited',params).then(res=>{
  return res
})


// 相关领域
export const getAreas= params => get('/HotspotAnalysis/relatedAreas',params).then(res=>{
  return res
})
