//  三花喵老全選 

    let check_all = document.getElementById("check_all");
    check_all.addEventListener("click", function(){   
        let main_check = check_all;
        let all_items = document.querySelectorAll(".three_cat");
    all_items.forEach(function(item, i){
        item.checked = check_all.checked;  
    });
});   
    let all_items = document.querySelectorAll(".three_cat");
    all_items.forEach(function(item, i){
        item.addEventListener("click", function(){
            let checked_length = document.querySelectorAll(".three_cat:checked").length;   
            let all_length = document.querySelectorAll(".three_cat").length;
                if(checked_length == all_length){
                check_all.checked = true;
                }else{
                check_all.checked = false;
                }  
        });
    });