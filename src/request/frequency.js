import {get} from './http'



//关键词关系树
export const getKeywordsTree= params => get('/RetrieveController/keywordsTree',params).then(res=>{
  return res
})
//子关键词频次统计
export const getKeywordsFrequency= params => get('/RetrieveController/keywordsFrequency',params).then(res=>{
  return res
})



