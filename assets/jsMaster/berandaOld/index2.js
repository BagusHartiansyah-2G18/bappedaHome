function _onload(data){
    $('#body').html(data.tmBody);
    // myCode=data.code;

    // start 
    judul.nm=data.nm;
    judul.nama=data.nama;
    judul.Logo=data.logo;
    judul.copyright=data.copyright;


    _.slider=data.slider;
    // _.tahun=data.tahun;
    _.dinas=data.dinas;

    _.sfKdDinas=null;
    _.svKey=false; /// menandakan e master tanpa kode dinas
    $('#menuAPP').html(_form2());
    // $('#bodyTM').html(_form2());
    $('#footer').html(data.footer+data.tmFooter);

    // // $('#username').val('m0-dev');
    // // $('#password').val('aaa');
    $("#slider").css("background-image", "url('"+assert+"/fs_sistem/slider/"+_.slider[0].nama+"')");
    ind=0;
    kondisi=true;
    setInterval(function() {
        if(_.slider.length>1 && kondisi){
            ind++;
        }
        kondisi=true;
        $("#slider").css("background-image", "url('"+assert+"/fs_sistem/slider/"+_.slider[ind].nama+"')");
        if(ind==(_.slider.length-1)){
            ind=0;
            kondisi=false;
            
        }
    },10000)
}
function _form2(){
    hicon="40px";
    fsize="60px";
    fsizeW="160px";
   return `
    <div class="" style="min-height:600px; width:500px;margin: auto;padding: 20px;float: right;">`
        // +_formNoHeader({
        //     shadow:false,
        //     style:`background:none;`,
        //     kolom:[
        //         {
        //             size:"2",form:`<img src="`+assert+`/fs_css/logo/logoKSB.png" style="height:120px;margin-top: 5px;">`
        //         },{
        //             size:"10",form:`
        //                 <h1 class="heading" style='font-family: Georgia, "Times New Roman", Times, serif; color:white;'>
        //                     <b>BAPPEDA</b>
        //                 </h1>
        //                 <h5 class="heading" style='font-family: Georgia, "Times New Roman", Times, serif; color:white;'>
        //                     KABUPATEN SUMBAWA BARAT
        //                 </h5>`
        //         }
        //     ]
        // })
        // +`<h2 class="heading" style='font-family: Georgia, "Times New Roman", Times, serif; color:white; text-align:center; background: rgba(13, 13, 13, 0.07)'>
        //     <b>TERWUJUDNYA KSB BAIK BERLANDASKAN GOTONG ROYONG</b>
        //     <br>`
        //     +_lines({
        //         attr:'background:white; height:5px;'
        //     })
        // +`</h2>
        // background-image:url('`+assert+`/fs_css/teknologi2.jpg') background-color: rgba(36, 33, 49, 0.1) background-image:url("`+assert+`/fs_css/bg3.jpg");
        +`<div class="shadow"  style="margin-top:150px; padding:50px;background-image:url('`+assert+`/fs_css/teknologi5.gif');border-radius: 20%;">`
            +_sejajar({
                data:[{
                    isi:`
                        <button class="btn-block justify-content-center " style='background-image:url("`+assert+`/fs_css/abstract.jpg");background-size: cover;color:black;padding: 0px; border-radius: 20%;width: `+fsizeW+`;height:`+fsize+`;border-style: none;border-width: 3px;margin:auto;' 
                            onclick="_login(1)">
                            <div class="bg-info">`
                                +_textCenter({text:'E-MUSRENBANG'})
                            +`</div>
                        </button>    
                        <button onclick="_login(1)" style="text-align: center;" class="btn btn-info btn-block btn-sm"></button>
                    `
                },{
                    isi:`<button class="btn-block justify-content-center" style='background-image:url("`+assert+`/fs_css/abstract1.jpg");background-size: cover;color:black;padding: 0px; border-radius: 20%;width: `+fsizeW+`;height: `+fsize+`;border-style: none;border-width: 3px;margin:auto;' 
                            onclick="_login(2)">
                            <div class="bg-primary">`
                                +_textCenter({text:'E-RENJA'})
                            +`</div>    
                        <button onclick="_login(2)" style="text-align: center;" class="btn btn-primary btn-block btn-sm"></button>
                    `
                }]
            })
            +_lines({})
            +_sejajar({
                data:[{
                    isi:`<button onclick="_login(3)" style="text-align: center;" class="btn btn-success btn-block btn-sm"></button>
                        <button class="btn-block justify-content-center mt-2" style='background-image:url("`+assert+`/fs_css/abstract2.jpg");background-size: cover;padding: 0px; color:black; border-radius: 20%;width: `+fsizeW+`;height: `+fsize+`;border-style: none;border-width: 3px;margin:auto;' 
                            onclick="_login(3)">
                            <div class="bg-success">`
                                +_textCenter({text:'DATA KU'})
                            +`</div>    
                        </button>    
                        
                    `
                },{
                    isi:`<button onclick="_login(2)" style="text-align: center;" class="btn btn-danger btn-block btn-sm"></button>
                        <button class="btn-block justify-content-center  mt-2" style='background-image:url("`+assert+`/fs_css/sipd.png");background-size: cover;padding: 0px; color:black; border-radius: 20%;width: `+fsizeW+`;height: `+fsize+`;border-style: none;border-width: 3px;margin:auto;' 
                            onclick="_login(2)"> 
                             <div class="bg-danger">`
                                +_textCenter({text:'SIPD'})
                            +`</div>
                        </button>    
                        
                    `
                }]
            })
        +`</div>
    </div>`;
    // +_textCenter({text:` <a class="small" href="forgot-password.html">Forgot Password?</a>`})+
    //     _textCenter({text:` <a class="small" href="register.html">Create an Account!</a>`})
}

function _login(key) {
    _.sfUrl=router;
    fjudul="DATA KU";
    _.sfUrl+='dataku/control/dashboard/';
    _.svKey=true;
    _.sfKdDinas='-';
    switch (key) {
        case 1:
            fjudul="E - MUSRENBANG";
            _.sfUrl='emusrenbang/index.php/control/dashboard/';
            _.svKey=true;
            return _redirectOpen("musrenbang");
        break;
        case 2:
            fjudul="E - RENJA";
            _.sfUrl='control/dashboard/';
            _.svKey=true;
        break;
        case 3:
            return _redirectOpen("dataku");
        break;
    }
    _modalEx1({
        judul:"SISTEM "+fjudul.toUpperCase(),
        icon:`<i class="mdi mdi-note-plus"></i>`,
        cform:`text-light`,
        bg:"bg-light",
        minWidth:"500px; ;",
        isi:_flogin(_.svKey),
        footer:_btn({
                    color:"primary shadow",
                    judul:"Close",
                    attr:`style='float:right; padding:5px;;' onclick="_modalHide('modal')"`,
                    class:"btn btn-secondary"
                })
                +_btn({
                    color:"primary shadow",
                    judul:"Login",
                    attr:"style='float:right; padding:5px;;' onclick='_logined()'",
                    class:"btn btn-primary"
                })
    });
}
function _changeValDinas(v) {
    if(!$('#dinas').hasClass('show')){
        $('#dinas').addClass("show");
    }
    _multiDropdonwSearch({
        data:_.dinas,
        idData:"ddinas",
        id:"dinas",
        value:v.value,
        func:"_selectDinas",
        idDropdonw:"idInpDropDinas",
    })
}
function _selectDinas(idForDrop,id,value,valueName){
    _.sfKdDinas=value;
    $("#"+id).val(valueName.substring(0,50));
    return _showForDropSelect(idForDrop);
}
function _formSearchDinas(v){
    _multiDropdonwSearch({
        data:_.dinas,
        idData:"ddinas",
        id:"dinas",
        value:v.value,
        func:"_selectDinas",
        idDropdonw:"idInpDropDinas",
    })
}
function _logined(){     
    param={
        username:$('#username').val(),
        password:$('#password').val(),
        kdDinas:_.sfKdDinas,
        tahun:$('#tahun').val(),
    }
    if(_.svKey){
        if(param.kdDinas=='-')return _toast({bg:'e',msg:'Pilih Dinas !!!'});
        if(_isNull(param.kdDinas))return _toast({bg:'e',msg:'Pilih Dinas !!!'});
    }
    if(_isNull(param.username))return _toast({bg:'e',msg:'Tambahkan username !!!'});
    if(_isNull(param.password))return _toast({bg:'e',msg:'Tambahkan password !!!'});
    
    _post('proses/checkUser',param).then(response=>{
        response=JSON.parse(response);
        if(response.exec){
            // _redirect("control/dashboard/"+btoa(JSON.stringify(param)));
            window.location.href = _.sfUrl+btoa(JSON.stringify(param));
        }else{
            return _toast({bg:'e', msg:response.msg});
        }
    });
}  