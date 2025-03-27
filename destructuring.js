console.log("logg....")

const Obj = {
    "status": true,
    "Graph_Logs": [
        {
            "user_name": "Smit Trivedi",
            "total_time": 5068777986,
            "employee_id": 20
        },
        {
            "user_name": "Himanshu Rathod",
            "total_time": 337288073,
            "employee_id": 4
        },
        {
            "user_name": "Nisarg Satasita",
            "total_time": 349942574,
            "employee_id": 3
        }
    ],
    "ProjectTotalTimeLogs": {
        "15-11-2024": {
            "total_date_wise_total": 1075998605,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 1075998605
                }
            ]
        },
        "27-11-2024": {
            "total_date_wise_total": 520023837,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 520023837
                }
            ]
        },
        "03-12-2024": {
            "total_date_wise_total": 19867545,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 19867545
                }
            ]
        },
        "30-12-2024": {
            "total_date_wise_total": 1534698,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 1534698
                }
            ]
        },
        "31-12-2024": {
            "total_date_wise_total": 202646632,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 202646632
                }
            ]
        },
        "06-01-2025": {
            "total_date_wise_total": 423888943,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 423888943
                }
            ]
        },
        "07-01-2025": {
            "total_date_wise_total": 206542991,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 206542991
                }
            ]
        },
        "08-01-2025": {
            "total_date_wise_total": 107906971,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 86978850
                },
                {
                    "user_name": "Himanshu Rathod",
                    "user_total_time": 20928121
                }
            ]
        },
        "09-01-2025": {
            "total_date_wise_total": 457971526,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 141611574
                },
                {
                    "user_name": "Himanshu Rathod",
                    "user_total_time": 316359952
                }
            ]
        },
        "10-01-2025": {
            "total_date_wise_total": 1260557843,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 1260557843
                }
            ]
        },
        "17-01-2025": {
            "total_date_wise_total": 27398307,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 27398307
                }
            ]
        },
        "22-01-2025": {
            "total_date_wise_total": 224082309,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 224082309
                }
            ]
        },
        "23-01-2025": {
            "total_date_wise_total": 421639121,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 421639121
                }
            ]
        },
        "27-01-2025": {
            "total_date_wise_total": 80187697,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 80187697
                }
            ]
        },
        "29-01-2025": {
            "total_date_wise_total": 109331471,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 109331471
                }
            ]
        },
        "30-01-2025": {
            "total_date_wise_total": 616430137,
            "users": [
                {
                    "user_name": "Smit Trivedi",
                    "user_total_time": 266487563
                },
                {
                    "user_name": "Nisarg Satasita",
                    "user_total_time": 349942574
                }
            ]
        }
    },
    "count": 3,
    "totalPages": 1
}
const {Graph_Logs} = Obj;
const OrigionalArr = Graph_Logs;
const maipulateArr = []; 
// console.log("OrigionalArr::",OrigionalArr)


Graph_Logs[1] = 
{
    user_name: 'Amit Trivedi',
        total_time: 111,
        employee_id: 87
    }
    
    // console.log("manipulate::",Graph_Logs) 

    const combinationDestArr = [...OrigionalArr,...Graph_Logs]
    const combinationSeprateArr = [OrigionalArr,Graph_Logs]
    console.log("combinationDestArr::",combinationDestArr)
    // console.log("combinationSeprateArr",combinationSeprateArr)

    // Array Overriding ! 
    const get_first_last_name = (data)=>{
        if(!Array.isArray(data)){
            console.log("Parameter is not an array!")
        }
        let newData;
        return newData = data?.map((data,index,array)=>{
            const [first_index,second_index] = data.user_name.split(' ');
            // const first_name = data.user_name.split(' ')[0]  
            // const last_name = data.user_name.split(' ')[1]
            console.log(data)
            if(data.employee_id === 87){
                return  [{
                    first_name:"User First Name",
                    last_name:"User First Name",
                    total_time:data.total_time,
                    employee_id:data.employee_id
                }]        
            }else{
                return  [{
                    first_name:first_index,
                    last_name:second_index,
                    total_time:data.total_time,
                    employee_id:data.employee_id
                }]   
            }
        })
        

    }

    const get_FN_LN = get_first_last_name(combinationDestArr)
    console.log("get_FN_LN--->>>",get_FN_LN)

    // Destructuring A Array in Arrays in object ! 
    const get_dest_data = (data)=>{
        if(!Array.isArray(data)){
            console.log("Parameter is not an array!")
        }
        const newArrDest = [];
         const destData = data.map((datas)=>{
             if(!Array.isArray(datas)){
                 console.log("Parameter is not an array!")
                return
        }
            console.log("datas===>>>",...datas)
            newArrDest.push(...datas)
        })
        // newArrDest.push(destData)
        // console.log("newArrDest...",newArrDest)
        return newArrDest
    }
    const getDestData = get_dest_data(get_FN_LN)
    console.log("getDestData===>>>>",getDestData)