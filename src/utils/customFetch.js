
const customFetch = (time, data) => {
        return new Promise((resolve, reject) => {
          if (data) {
            setTimeout (() => {
                resolve(data);
            },time)
            
          } else {
            reject("Error in customFetch");
          }
        });
}

export default customFetch