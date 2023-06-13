import {get} from './http'


//科研合作地区
export const getTrendCity = params => get('/DevelopmentTrendAnalysis/city',params).then(res=>{
  return res.data.trendLine
})

//科技领域机构
export const getTrendOrg= params => get('/DevelopmentTrendAnalysis/org',params)

//科技研究主题
export const getTrendTopics= params => get('/DevelopmentTrendAnalysis/researchTopics',params)

//新兴热点研究主题
export const getTrendNewTopics= params => get('/DevelopmentTrendAnalysis/newResearchTopics',params).then(res=>{
  return res
})

//国际期刊TOP10
export const getTrendJournal= params => get('/DevelopmentTrendAnalysis/internationalJournal',params).then(res=>{
  return res.data.trendLine
})

//机构合作关系
export const getOrgCooperation= params => get('/DevelopmentTrendAnalysis/orgCooperation',params).then(res=>{
  return res
})




