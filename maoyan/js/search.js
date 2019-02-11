$('#searchTxt').keyup(function(){
    if($('#searchTxt').val()===""){
        $('#searchTxt').val('')
        $('#inputShow').css('display','none');
    }else{
        $('#inputShow').css('display','block');
        var ajax = new XMLHttpRequest;
        ajax.open("get", "../php/search.php?cont="+this.value, true);
        ajax.send(null);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status === 200) {
                var data=JSON.parse(ajax.responseText);
                var str="";
                console.log(data.type);
                console.log(data)
                if(data.type===0){
                    var data1=JSON.parse(ajax.responseText).movies;
                    console.log(data1)
                    for(var i=0;i<data1.length;i++){
                        str += `<div class="show">
                            <div>影视剧</div>
                                <div>
                                    <div class="show1"><img src="${data[i].img}" alt="">${data[i].nm}</p></div>
                                    <div class="show1" style="border-top:1px solid #eee;border-bottom:1px solid #eee">
                                        <img src="${data[i].img}" alt=""><p>${data[i].nm}</p>
                                    </div>
                                    <div class="show1"><img src="${data[i].img}" alt=""><p>${data[i].nm}</p></div>
                                </div>
                            </div>`;
                    }
                    $('#inputShow').html(str);
                }else if(data.type===1){
                    var data2=JSON.parse(ajax.responseText).celebritys;
                    console.log(data2)
                    for(var k=0;k<data2.length;k++){
                        // str+=`<div class="show">
                        //         <div>影视剧</div>
                        //         <div>
                        //             <div class="show1"><img src="../img/img.png" alt=""><p>泰坦尼克3D</p></div>
                        //             <div class="show1" style="border-top:1px solid #eee;border-bottom:1px solid #eee">
                        //                 <img src="../img/img.png" alt=""><p>泰坦尼克3D</p>
                        //             </div>
                        //             <div class="show1"><img src="../img/img.png" alt=""><p>泰坦尼克3D</p></div>
                        //         </div>
                        //     </div>`;
                    }
                }
            }
        }
    }  
})
$('#searchTxt').blur(function(){
    $('#inputShow').css('display','none');
})