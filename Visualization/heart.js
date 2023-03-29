// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


// Interface Connection
    let parameter = { param: 'heart' }
    axios.all([

        // Pie Chart
        axios.get('http://data.iscr.ac.cn/mm-api/BiologicalStemCell/statistics/manufacturingStrategy',
            { params: parameter})
            .then(res=>{
                // 接口数据
                console.log(res)
                let label_strategy = res.data.data['axis'];
                let count_strategy = res.data.data['data'];

        var ctx = document.getElementById("Pie-heart");
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
        axios.get('http://data.iscr.ac.cn/mm-api/BiologicalStemCell/statistics/materials',
            { params: parameter})
            .then(res=> {
              // 接口数据
              console.log(res)
              let label_material = res.data.data['axis'];
              let count_material = res.data.data['data'];

              var ctx = document.getElementById("Bar-heart");
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
                        max: 60,
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
          axios.get('http://data.iscr.ac.cn/mm-api/BiologicalStemCell/statistics/cell',
            { params: parameter})
            .then(res=> {
              // 接口数据
              console.log(res)
              let label_cell = res.data.data['axis'];
              let count_cell = res.data.data['data'];
              var ctx = document.getElementById("Area-heart");
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
                        max: 200,
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
        ])

