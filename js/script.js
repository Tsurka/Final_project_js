   var workDays = document.getElementById("worksDays");
        var numOfQuest = document.getElementById("numberOfquestions");
        var arr_tsks = new Array();
        console.log( arr_tsks);


        var wD = workDays.oninput = function(){
            if ( check_fill(workDays) == true ){
                output_workD(worksDays.value);
            }
        }
        var nOQ = numOfQuest.oninput = function(){
            if ( check_fill(numOfQuest) == true ){
                output_numofQ(numOfQuest.value);
            }
        } 

        function check_fill(input){
            // console.log(input.value);
        
            if (input.value < 0){
                input.value = '';
                alert("Please enter valid input ! ");
                return false;
            }
            if (parseInt(input.value) % 1 === 0) {
               
            } else {
                // console.log(input.value); 
                input.value = '';
                alert('ae da ne pishesh bukvichki');
                return false;
            }
            return true;
        }

        function output_workD(rows){
            // console.log(rows);
            try {
                document.getElementById('disp').removeChild(document.getElementById('workD'));
            } catch(e) {}

            arr_tsks = [];
            arr_tsks = new Array(parseInt(workDays.value));
            

            var div_disp = document.getElementById('disp');
            var div_workD = document.createElement('div');
                div_workD.setAttribute('id', 'workD');
            for (var i = 1; i <= rows; i++) {
                var inp_workD = document.createElement('input');
                inp_workD.setAttribute('id', i);
                inp_workD.setAttribute('class', 'cls_workD');
                inp_workD.setAttribute('type', 'number');
                inp_workD.setAttribute('oninput', 'get_num_tsk(this);')
                inp_workD.setAttribute('placeholder', 'Напишете задачите за ден '+ i );
                div_workD.appendChild(inp_workD);
            }
            div_disp.appendChild(div_workD);
        }
        function output_numofQ(rows){
            try {
                document.getElementById('disp').removeChild(document.getElementById('questns'));
            } catch(e) {}
           
            var div_disp = document.getElementById('disp');
           
            var div_numofQ = document.createElement('div');
                div_numofQ.setAttribute('id', 'questns');
            for (var i = 1; i <= rows; i++) {

                var inp_numofQ_from = document.createElement('input');
                inp_numofQ_from.setAttribute('id', 'inp_quest_from_'+i);
                inp_numofQ_from.setAttribute('type', 'number');
                inp_numofQ_from.setAttribute('placeholder', 'От ден' );
                inp_numofQ_from.setAttribute('oninput', 'chk_ft(this)');
                div_numofQ.appendChild(inp_numofQ_from);

                var inp_numofQ_to = document.createElement('input');
                inp_numofQ_to.setAttribute('id', 'inp_quest_to_'+i);
                inp_numofQ_to.setAttribute('type', 'number');
                inp_numofQ_to.setAttribute('placeholder', 'До ден' );
                inp_numofQ_to.setAttribute('oninput', 'chk_ft(this)');
                div_numofQ.appendChild(inp_numofQ_to);
            }
                
            div_disp.appendChild(div_numofQ);

        }
        function get_num_tsk(vall){
            check_fill(vall);
            console.log('vall:'+vall.id);
            var numofe = document.getElementById('workD').childElementCount;
            // console.log('numofe: ' + numofe);
            arr_tsks[vall.id - 1] = parseInt(vall.value);

            console.log(arr_tsks);




        }

        function chk_ft(vall){
            console.log('wdv:' + worksDays.value);
            
           if ( check_fill(vall) ){
                
                console.log('vall-vall '+ vall.value + ' wd-val '+ workDays.value);
                if ( parseInt(vall.value) > parseInt(workDays.value) ) {
                    vall.value = '';
                    alert('Извън обхвата на работните дни!');

                } else {

                }
           } 


        }

        function thesum(fr_day, to_day){
            var div_res = document.getElementById('results');
           
            var sum = 0;
            for (var i = fr_day; i <= to_day; i++) {
                sum += arr_tsks[i-1];
                

                console.log('sum: ' + sum);

            }
            
            var new_res = document.createElement('p');
            new_res.innerHTML = 'от ден ' + fr_day + ' до ден ' + to_day + ' - ' + sum;
            div_res.appendChild(new_res);

        }
