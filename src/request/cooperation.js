import {get} from './http'


//科研合作国家
export const getTrendCountry = params => get('/DevelopmentTrendAnalysis/country',params)

// 国际合作整体趋势
export const getCooperation= params => get('/DevelopmentTrendAnalysis/entiretyCooperationTrend',params)

//国际合作首都机构研究主题
export const getCooperCapital= params => get('/DevelopmentTrendAnalysis/interCooperationCapitalOrg',params)

//国际合作整体趋势
export const getCooperCountry= params => get('/DevelopmentTrendAnalysis/countryCooperationTrend',params)

//国际合作整体趋势
export const getCooperSubject= params => get('/DevelopmentTrendAnalysis/interCooperationSubject',params)






