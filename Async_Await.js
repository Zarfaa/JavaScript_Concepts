// let fetchData = new Promise((resolve) => {
//     setTimeout(() => {
//         const data = 'Hello';
//         resolve(data)
//         }, 1000);
// })


// let processData = new Promise((resolve) =>{
//     setTimeout(() => {
//         const processedData = data + ' World';
//         resolve(processedData)
//         }, 1000);
// })

// let displayData = new Promise((resolve) => {
//     setTimeout(() => {
//     console.log(data);
//     resolve();
//     }, 1000);
//     })


let responseData = {
    "reportTypes": [
      {
        "id": "D9B046DF-7D8C-EF11-8D4B-C03EBA4FB945",
        "name": "SEHA HIS (Itemized Report)",
        "source_system": "Cerner HIS",
        "data_source": "South",
        "is_disabled": false,
        "data_set_table_name": "Itemized_Report_data_set",
        "processed_set_table_name": "SEHA_HIS_Itemized_Report_processed_set",
        "createdAt": "2024-10-17T16:49:32.650Z",
        "updatedAt": "2024-10-17T16:49:32.650Z"
      },
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 13,
      "totalPages": 2
    },
    "timestamp": "2024-10-24T10:43:58.299Z"
  };
  
  // Find the data key that is not 'pagination' or 'timestamp'
  const dataKey = Object.keys(responseData).find(
    (key) => key !== 'pagination' && key !== 'timestamp'
  );
  
  const outputArray = responseData[dataKey];
console.log(outputArray); 
  // Log the key name only
  console.log(dataKey); // This will log "reportTypes"
  

