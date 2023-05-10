// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
let organ= GetOrgan('s');
if (organ===null)
    getSAllSecTopic();


    function axiosAll(){
        // Interface Connection
        let parameter = { organ: organ }
        axios.all([

            // Pie Chart
            axios.get('http://10.0.90.170:1688/BiologicalStemCell/statistics/manufacturingStrategy',
                { params: parameter})
                .then(res=>{
                    let label_strategy = res.data.data['axis'];
                    let count_strategy = res.data.data['data'];

                    var ctx = document.getElementById("Pie");
                    var myPieChart = new Chart(ctx, {
                        type: 'pie',
                        data: {
                            labels: label_strategy,
                            datasets: [{
                                data: count_strategy,
                                backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                            }],
                        },
                    })

                    // Bar Chart
                    axios.get('http://10.0.90.170:1688/BiologicalStemCell/statistics/materials',
                        { params: parameter})
                        .then(res=> {
                            // 接口数据
                            // console.log(res)
                            let label_material = res.data.data['axis'];
                            let count_material = res.data.data['data'];

                            // 计算最大值
                            let max = Math.max(...count_material);
                            let maxRoundedUp;
                            if (max <= 100) {
                                maxRoundedUp =
                                    Math.ceil(max / 10) * 10;
                            } else {
                                maxRoundedUp = Math.ceil(max / 100) * 100;
                            }
                            var ctx = document.getElementById("Bar");
                            var myLineChart = new Chart(ctx, {
                                type: 'bar',
                                data: {
                                    labels: label_material.slice(0, 10), // 使用slice切片 选择数量最多的前十个
                                    datasets: [{
                                        label: 'count',
                                        backgroundColor: ['#28c7fa', '#ff006c', '#47d6b6', '#f96d00', '#9c1de7',
                                            '#fef200', '#39bdc8', '#7a57d1', '#fc5185', '#575151'],
                                        data: count_material,
                                    }],
                                },
                                options: {
                                    scales: {
                                        xAxes: [{
                                            time: {
                                                unit: 'materials'
                                            },
                                            gridLines: {
                                                display: false
                                            },
                                            ticks: {
                                                maxTicksLimit: 10
                                            }
                                        }],
                                        yAxes: [{
                                            ticks: {
                                                min: 0,
                                                max: maxRoundedUp,
                                                maxTicksLimit: 10
                                            },
                                            gridLines: {
                                                display: true
                                            }
                                        }],
                                    },
                                    legend: {
                                        display: false
                                    }
                                }
                            });
                        })

                    // Area Chart
                    axios.get('http://10.0.90.170:1688/BiologicalStemCell/statistics/cell',
                        { params: parameter})
                        .then(res=> {
                            // 接口数据
                            // console.log(res)
                            let label_cell = res.data.data['axis'];
                            let count_cell = res.data.data['data'];
                            var ctx = document.getElementById("Area");

                              // 计算最大值
                            let max = Math.max(...count_cell);
                            let maxRoundedUp;
                            if (max <= 100) {
                                maxRoundedUp = Math.ceil(max / 10) * 10;
                            } else {
                                maxRoundedUp = Math.ceil(max / 100) * 100;
                            }

                            var myLineChart = new Chart(ctx, {
                                type: 'line',
                                data: {
                                    labels: label_cell.slice(0, 12),  // 使用slice切片 选择数量最多的前十个
                                    datasets: [{
                                        label: "count",
                                        lineTension: 0.3,
                                        backgroundColor: ['#28c7fa', '#ff006c', '#47d6b6', '#f96d00', '#9c1de7',
                                            '#fef200', '#39bdc8', '#7a57d1', '#fc5185', '#575151', '#28c7fa', '#ff006c'],
                                        borderColor: "#00d8b1",
                                        pointRadius: 5,
                                        pointBackgroundColor:['#28c7fa', '#ff006c', '#47d6b6', '#f96d00', '#9c1de7',
                                            '#fef200', '#39bdc8', '#7a57d1', '#fc5185', '#575151', '#28c7fa', '#ff006c'],
                                        pointBorderColor: "rgba(255,255,255,0.8)",
                                        pointHoverRadius: 1,
                                        pointHoverBackgroundColor: "rgba(2,117,216,1)",
                                        pointHitRadius: 50,
                                        pointBorderWidth: 2,
                                        data: count_cell,
                                        fill: false,
                                    }],
                                },
                                options: {
                                    scales: {
                                        xAxes: [{
                                            time: {
                                                unit: 'date'
                                            },
                                            gridLines: {
                                                display: false
                                            },
                                            ticks: {
                                                maxTicksLimit: 16
                                            }
                                        }],
                                        yAxes: [{
                                            ticks: {
                                                min: 0,
                                                max: maxRoundedUp,
                                                maxTicksLimit: 5
                                            },
                                            gridLines: {
                                                color: "rgba(0, 0, 0, .125)",
                                            }
                                        }],
                                    },
                                    legend: {
                                        display: false
                                    }
                                }
                            });
                        })

                        // // Table
                        // axios.get('http://www.dviz.cn/BiologicalStemCell/search/list',
                        // { params: {page:1, limit:10, param:'heart'}})
                        // .then(res=> {
                        //   console.log(res)
                        //   let jsonlist = res.data.data['dataList'];
                        //   let total = res.data.data['total']
                        //
                        //
                        //   // 将接口的数据返回并拼接成表格
                        //
                        //   var str = "";
                        //   var showfilebody=document.getElementById('showfilebody');
                        //   new simpleDatatables.DataTable(Table_heart);
                        //   for(var i=0; i<total; i++){
                        //
                        //     str += "<tr><td>" + jsonlist[i].title+ "</td><td>" + jsonlist[i].authors+ "</td><td>" +
                        //         jsonlist[i].year + "</td><td>" + jsonlist[i].journal + "</td><td>" + jsonlist[i].citation +
                        //         "</td><td>" + jsonlist[i].keywords +"</td></tr>";
                        //         // $("#Table_heart").append(str);
                        //         showfilebody.innerHTML=str;  //此种方法为直接覆盖 非直接将后端数据嵌入表格中
                        //
                        //   }
                        //     })

                        .catch(error=>{
                            // 连接接口失败抛出错误
                        })
                })
        ]);
    }

    function searchList(){
        // 请保持与该接口的值一致 http://data.iscr.ac.cn/mm-api/BiologicalStemCell/search/list
        axios.get('http://10.0.90.170:1688/BiologicalStemCell/search/list',

            { params: {page:1, limit:9999, param:organ}})
            .then(res=> {
                // console.log(res)
                let jsonlist = res.data.data['dataList'];
            var container = document.querySelector('#container');
            //也就是获取我们定义的模板的dom对象 主要是想获取里面的内容（innerHTML）
            var templateDom = document.querySelector('#template');
            //编译模板的里的内容
            var template = Handlebars.compile(templateDom.innerHTML);
            //把后台获取到的数据渲染到页面
            container.innerHTML = template(jsonlist);
            //为Table创建表格样式架构
            $('#Table_organ').DataTable({order: [[2, 'desc']],});
            })
    }

    function getSelectData(){
        axios.get('http://10.0.90.170:1688/BiologicalStemCell/search/keywordList')
            .then(res=>{
                if (res.data.code===200){
                    let data= res.data.data;
                    var arr= data.firstKeywordList;
                    var allHtml = "<option selected disabled value=\"\">Choose...</option>";
                    for (var i = 0; i<arr.length; i++) {
                        var obj = arr[i];
                        var str = "<option>"+obj+"</option>";
                        allHtml += str;
                    }
                    document.getElementById("validationCustom0").innerHTML = allHtml;
                }
            })
    }

    function getSAllSecTopic(){
        axios.get('http://10.0.90.170:1688/BiologicalStemCell/search/AllSecTopic')
            .then(res=>{
                if (res.data.code===200){
                    let data= res.data.data;
                    let arr= [];
                    for (let key in data){ arr.push(key) };
                    let allHtml = "<option selected disabled value=\"\">Choose...</option>";
                    for (var i = 0; i<arr.length; i++) {
                        var obj = arr[i];
                        var str = "<option>"+obj+"</option>";
                        allHtml += str;
                    }
                    document.getElementById("validationCustom").innerHTML = allHtml;
                }
            })
    }

    function getSecondKeyword(firstKeyword, secondKeyword){
        let param={ organ:organ, firstKeyword: firstKeyword, secondKeyword: secondKeyword };
        axios.get('http://10.0.90.170:1688/BiologicalStemCell/search/keywordList',
        { params: param})
            .then(res=>{
                if (res.data.code===200){
                    let data= res.data.data;
                    if (!!secondKeyword){

                        var thirdList= data.thirdList;
                        var allHtml1 = "<option selected disabled value=\"\">Choose...</option>";
                        for (var j = 0; j<thirdList.length; j++) {
                            var obj1 = thirdList[j];
                            var str1 = "<option>"+obj1+"</option>";
                            allHtml1 += str1;
                        }
                        document.getElementById("validationCustom2").innerHTML = allHtml1;
                    }else {

                        var arr= data.secondKeywordList;
                        var allHtml = "<option selected disabled value=\"\">Choose...</option>";
                        for (var i = 0; i<arr.length; i++) {
                            var obj = arr[i];
                            var str = "<option>"+obj+"</option>";
                            allHtml += str;
                        }
                        document.getElementById("validationCustom1").innerHTML = allHtml;
                    }

                }
            })
    }

    function handleChange(){
        $("#validationCustom0").change(function(){
            var opt=$("#validationCustom0").val();
            getSecondKeyword(opt)
        })
        $("#validationCustom1").change(function(){
            getSecondKeyword($("#validationCustom0").val(),$("#validationCustom1").val())
        })
    }

    function getCountry(val){
        let param={ keyword: val, organ:organ };
        axios.get('http://10.0.90.170:1688/BiologicalStemCell/statistics/countryList',
            { params: param})
            .then(res=>{
                if (res.data.code===200){
                    const data= res.data.data;
                    data.forEach((item,index)=>{
                        item.itemStyle={
                            barBorderRadius: [0, 10, 10, 0],
                            // color: this.color[index%this.color.length],
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                { offset: 0, color: '#0663dbb3' },
                                { offset: 0.2, color: '#0663dbb3' },
                                { offset: 1, color: '#0663db' }
                            ])
                        };
                        item.label= {
                            show: true,
                            color: '#8f949f',
                            position: 'right',
                            valueAnimation: true
                        }
                    });
                    let xAxisData = data.map((item)=>{ return item.name});
                    let seriesData=  data.splice(0,100).reverse();
                    let ctx = echarts.init(document.getElementById('country'));
                    let option  = {
                        tooltip: {},
                        grid : {
                            left: 0,
                            // right : 0,
                            bottom : 0,
                            top : 10,
                            containLabel : true
                        },
                        dataZoom:[
                            {
                                type: 'slider',
                                maxValueSpan:9,//显示数据的条数(默认显示10个)
                                show: true,
                                width:  '5',
                                height:  '100%',
                                yAxisIndex: [0],
                                // left: '93%', //滑动条位置
                                start:100,//默认为0
                                end: 100-9/seriesData.length*100,//默认为100
                                orient:"vertical",
                                filterMode: 'empty',
                                zoomLock:true,
                                fillerColor: "#2f96f6", // 滚动条颜色
                                borderColor: "rgba(17, 100, 210, 0.12)",
                                backgroundColor: '#c1dcff',//两边未选中的滑动条区域的颜色
                                handleSize:0, // 两边手柄尺寸
                                showDataShadow: false,//是否显示数据阴影 默认auto
                                showDetail: false, // 拖拽时是否展示滚动条两侧的文字
                                top:'1%',
                                right:'5',
                            },
                            {
                                type: 'inside', //内置滑动，随鼠标滚轮展示
                                yAxisIndex: [0],
                                start: 100,//初始化时，滑动条宽度开始标度
                                end: 100-9/seriesData.length*100,//默认为100
                                zoomOnMouseWheel:false, //如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。。
                                moveOnMouseMove:true,
                                moveOnMouseWheel:true,//鼠标滚轮实现移动
                            }
                        ],
                        xAxis: [
                            {
                                name: '',
                                type: 'value',
                                nameTextStyle:{
                                    color:'#262626'
                                },
                                axisTick: {show: false},
                                axisLine: {
                                    show: false,
                                    lineStyle:{
                                        color:'#ededed'
                                    }
                                },
                                splitLine:{
                                    show: true,
                                    lineStyle:{
                                        color:'#ededed'
                                    }},
                                axisLabel:{
                                    color:'#6F6F6F',
                                },
                            }
                        ],
                        yAxis: [
                            {
                                type: 'category',
                                axisTick: {show: false},
                                axisLine: {
                                    show: true,
                                    lineStyle:{
                                        color:'#979797'
                                    }
                                },
                                axisLabel:{
                                    color:'#6F6F6F',
                                    interval: 0,
                                    // rotate: 45,
                                    formatter: function(params) {
                                        var newParamsName = "";
                                        var paramsNameNumber = params.length;
                                        var provideNumber = 20;
                                        if (paramsNameNumber > provideNumber) {
                                            newParamsName= params.substr(0,provideNumber)+'...';
                                        } else {
                                            newParamsName = params;
                                        }
                                        return newParamsName;
                                    }
                                },
                                data:  xAxisData.splice(0,100).reverse()
                            }
                        ],
                        series: [
                            {
                                type: 'bar',
                                barGap: 0,  //两个柱状之间的间隙
                                barWidth :25, //柱形的宽度
                                data: seriesData
                            }
                        ]
                    };
                    ctx.setOption(option);
                }
            })
    }

    function getInstitution(val){
        let param={ keyword: val, organ:organ };
        axios.get('http://10.0.90.170:1688/BiologicalStemCell/statistics/orgList',
            { params: param})
            .then(res=>{
                if (res.data.code===200){
                    const data= res.data.data;
                    data.forEach((item,index)=>{
                        item.itemStyle={
                            barBorderRadius: [0, 10, 10, 0],
                            // color: this.color[index%this.color.length],
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                { offset: 0, color: '#788de0b3' },
                                { offset: 0.2, color: '#788de0b3' },
                                { offset: 1, color: '#788de0' }
                            ])
                        };
                        item.label= {
                            show: true,
                            color: '#8f949f',
                            position: 'right',
                            valueAnimation: true
                        }
                    });
                    let xAxisData = data.map((item)=>{ return item.name});
                    let seriesData= data.splice(0,100).reverse();
                    let ctx = echarts.init(document.getElementById('institution'));
                    let option  = {
                        tooltip: {},
                        grid : {
                            left: 0,
                            // right : 0,
                            bottom : 0,
                            top : 10,
                            containLabel : true
                        },
                        dataZoom:[
                            {
                                type: 'slider',
                                maxValueSpan:9,//显示数据的条数(默认显示10个)
                                show: true,
                                width:  '5',
                                height:  '100%',
                                yAxisIndex: [0],
                                // left: '93%', //滑动条位置
                                start:100,//默认为0
                                end: 100-9/seriesData.length*100,//默认为100
                                orient:"vertical",
                                filterMode: 'empty',
                                zoomLock:true,
                                fillerColor: "#2f96f6", // 滚动条颜色
                                borderColor: "rgba(17, 100, 210, 0.12)",
                                backgroundColor: '#c1dcff',//两边未选中的滑动条区域的颜色
                                handleSize:0, // 两边手柄尺寸
                                showDataShadow: false,//是否显示数据阴影 默认auto
                                showDetail: false, // 拖拽时是否展示滚动条两侧的文字
                                top:'1%',
                                right:'5',
                            },
                            {
                                type: 'inside', //内置滑动，随鼠标滚轮展示
                                yAxisIndex: [0],
                                start: 100,//初始化时，滑动条宽度开始标度
                                end: 100-9/seriesData.length*100,//默认为100
                                zoomOnMouseWheel:false, //如何触发缩放。可选值为：true：表示不按任何功能键，鼠标滚轮能触发缩放。false：表示鼠标滚轮不能触发缩放。'shift'：表示按住 shift 和鼠标滚轮能触发缩放。'ctrl'：表示按住 ctrl 和鼠标滚轮能触发缩放。'alt'：表示按住 alt 和鼠标滚轮能触发缩放。。
                                moveOnMouseMove:true,
                                moveOnMouseWheel:true,//鼠标滚轮实现移动
                            }
                        ],
                        xAxis: [
                            {
                                name: '',
                                type: 'value',
                                nameTextStyle:{
                                    color:'#262626'
                                },
                                axisTick: {show: false},
                                axisLine: {
                                    show: false,
                                    lineStyle:{
                                        color:'#ededed'
                                    }
                                },
                                splitLine:{
                                    show: true,
                                    lineStyle:{
                                        color:'#ededed'
                                    }},
                                axisLabel:{
                                    color:'#6F6F6F',
                                },
                            }
                        ],
                        yAxis: [
                            {
                                type: 'category',
                                axisTick: {show: false},
                                axisLine: {
                                    show: true,
                                    lineStyle:{
                                        color:'#979797'
                                    }
                                },
                                axisLabel:{
                                    color:'#6F6F6F',
                                    interval: 0,
                                    // rotate: 45,
                                    formatter: function(params) {
                                        var newParamsName = "";
                                        var paramsNameNumber = params.length;
                                        var provideNumber = 20;
                                        if (paramsNameNumber > provideNumber) {
                                            newParamsName= params.substr(0,provideNumber)+'...';
                                        } else {
                                            newParamsName = params;
                                        }
                                        return newParamsName;
                                    }
                                },
                                data: xAxisData.splice(0,100).reverse()
                            }
                        ],
                        series: [
                            {
                                type: 'bar',
                                barGap: 0,  //两个柱状之间的间隙
                                barWidth :25, //柱形的宽度
                                data: seriesData
                            }
                        ]
                    };
                    ctx.setOption(option);
                }
            })
    }

    function Reset(){
        $("#form")[0].reset();
    }

    function  GetOrgan(name) {
        let  reg = new  RegExp( "(^|&)" + name + "=([^&]*)(&|$)" );
        let  r = window.location.search.substr(1).match(reg);
        if (r!= null ) return   unescape(r[2]); return  null ;
    }

    function updateDom(){

        if (organ!=null) {
            document.getElementsByClassName('keyword_position')[0].innerHTML = organ;
            document.getElementsByClassName('keyword_position1')[0].innerHTML = 'Statistics of strategies, biomaterials, cells with respect to countries and institutions in fabricating the human ' + organ + '.';
        } else {
            document.getElementsByClassName('keyword_position')[0].innerHTML = 'Organs';
            document.getElementsByClassName('keyword_position1')[0].innerHTML = 'Statistics of strategies, biomaterials, cells with respect to countries and organizations in fabricating the human organs.';
        }
    }

    function handleSecTopic(){
        organ= $("#validationCustom").val();
        updateDom();
        axiosAll();
        searchList();
        getCountry('');
        getInstitution('');
    }

