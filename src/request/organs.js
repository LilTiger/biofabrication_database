import {get} from './http'


// Pie Chart
export const getPieChartData = params => get('/statistics/manufacturingStrategy',params)

// Bar Chart
export const getBarChartData= params => get('/statistics/materials',params)

//Area Chart
export const getAreaChartData= params => get('/statistics/cell',params)

//查询列表
export const getSearchList= params => get('/search/list',params)

//获得一二三级列表
export const getKeywordList= params => get('/search/keywordList',params)

//查询所有次副主题
export const getAllSecTopic= params => get('/search/AllSecTopic',params)

//国家排行
export const getCountryList= params => get('/statistics/countryList',params)

//机构排行
export const getOrgList= params => get('/statistics/orgList',params)
