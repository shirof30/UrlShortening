    //texarea element for output
    const textboxval = document.getElementById('textboxres');

    //event handler assignments
    document.getElementById('btAddTask').addEventListener('click',addTask);
    function copylink() 
    {
        var copyText = textboxval.value;
        navigator.clipboard.writeText(copyText);
        alert("Copied the link");
    }
    
    function addTask() {
        textboxval.value='URL Shortening started ...';

        const taskName = document.getElementById('inNewTask').value.trim();

        if (taskName=='') {
            textboxval.value +='\nSorry, nothing to shorten.\nDone.';
            return;
        }
        if (taskName.indexOf('https') < 0) {
          //textboxval.value ='TEXT ERROR \nPlease Include the HTTP on the link pasted.\n.... ABORTED ....';

          let text1 = "https://";
          let text2 = taskName;
          let result = text1.concat(text2);
          //taskName = result;
          const url='http://localhost:5000/api/url/shorten';
            const data = JSON.stringify({"longURL": result});
            const options=
            {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:data
            };

        //fetch call
            fetch(url,options).then(response=>response.json())
        .then(data=>{ textboxval.value=data; });
        return;
        } 

        //call settings
        const url='http://localhost:5000/api/url/shorten';
        const data = JSON.stringify({"longURL": taskName});
        const options=
            {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:data
            };

        //fetch call
        fetch(url,options).then(response=>response.json())
    .then(data=>{ textboxval.value=data; });
    }
