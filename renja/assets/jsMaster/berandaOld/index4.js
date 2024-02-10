function _onload(data){
    myCode=data.code;
    _.dt=[];
    _.dinas=data.dinas;

    const body=document.querySelector("body");
    body.style.fontFamily=` "Lucida Console", "Courier New", monospace`;

    const main=document.querySelector("main");

    header_.hmenu=[];
    header_.hmenu.push({htmlLi:`
        <button class="nav-link text-white" onclick="_login(1)" title="MUSRENBANG" data-bs-toggle="tooltip" data-bs-placement="left"
            style="background: none;border-style: none;">
            <i class="mdi mdi-dots-circle mdi-spin text-success" style="font-size:25px;"></i>
        </button>
    `});
    header_.hmenu.push({htmlLi:`
        <button class="nav-link text-white" onclick="_login(2)" title="RENJA" data-bs-toggle="tooltip" data-bs-placement="left"
            style="background: none;border-style: none;">
            <i class="mdi mdi-book-open-page-variant text-primary" style="font-size:25px;"></i>
        </button>
    `});
    header_.hmenu.push({htmlLi:`
        <button class="nav-link text-white" onclick="_login(3)" title="DATAKU" data-bs-toggle="tooltip" data-bs-placement="left"
            style="background: none;border-style: none;">
            <i class="mdi mdi-atom mdi-spin mdi-spin text-light" style="font-size:25px;"></i>
        </button>
    `});
    header_.hmenu.push({htmlLi:`
        <button class="nav-link text-white" onclick="_login(6)" title="MONEV" data-bs-toggle="tooltip" data-bs-placement="left"
            style="background: none;border-style: none;">
            <i class="mdi mdi-desktop-mac-dashboard text-warning" style="font-size:25px;"></i>
        </button>
    `});
    header_.hmenu.push({htmlLi:`
        <button class="nav-link text-white" onclick="_login(4)" title="SIPD" data-bs-toggle="tooltip" data-bs-placement="left"
            style="background: none;border-style: none;">
            <i class="mdi mdi-google-drive text-danger" style="font-size:25px;"></i>
        </button>
    `});

    let menuApp=sidebar_.ex1({
        cls:'d-flex flex-column flex-shrink-0 bg-dark',
        style:'width: 4.5rem;',
        htmlJudul:``,
        htmlNav:header_.nav3({
              clsUl:" nav-flush flex-column mb-auto text-center",
              clsLi:""
            }),
        footer:``
      })
    
    viewWebsite=_themaPublicView({
        menu:1,
        htmlKeterangan:style_.rowCol({
            clsRow:" container-fluid m-0 p-0",
            col:[
                {
                    cls:"-10",
                    html:''
                },{
                    cls:"-2 p-0 mt-4",
                    html:`<div class="" style="float: right">
                            ${menuApp}
                        </div>`
                }
            ]
        })
    });
    main.innerHTML=viewWebsite;
    
    const footer=document.querySelector("footer");
    footer.innerHTML=`
        <div class="container-fluid bg-info text-light p-1 text-center">
            <p>BAPPEDA©2022,Kabupaten Sumbawa Barat</p>
        </div>
    `+modal_.ex1({
        cls:"modal-dialog-centered modal-dialog-scrollable",
        clsHeader:"",
        clsBody:"",
    });
    $('#footer').html(data.footer+startmfc.endBootstrapHTML(2));
}
function _login(key) {
    _.sfUrl=router;
    fjudul="DATA KU";
    _.sfUrl+='dataku/control/dashboard/';
    _.svKey=true;
    _.sfKdDinas='-';
    switch (key) {
        case 1:
            // fjudul="E - MUSRENBANG";
            // _.sfUrl='emusrenbang/index.php/control/dashboard/';
            // _.svKey=true;
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
        case 4:
            return window.open("https://sumbawabaratkab.sipd.kemendagri.go.id/daerah?GqRjd5Q57KV1GhcAmGDFoMfL9PJSb16/gk6wdceyfIizsLDd9dM0KPn3CcCzOxL7T1e2ltEcdNdjZ8zKuYIvtGIzEjGl6nY6FSDrVeTQe@sA5@7c8DevqVA3xnqBNkXY", '_blank');
        break;
        case 5:
            fjudul="E-MASTER";
            _.sfUrl='master/control/dashboard/';
            _.svKey=false;
        break;
        case 6:
            fjudul="E - MONEV";
            _.sfUrl='monev/control/dashboard/';
            _.svKey=true;
        break;
    }
    modal_.setMo({
        ex:1,
        header:`<h1 class="modal-title fs-5" id="staticBackdropLiveLabel">${"SISTEM "+fjudul.toUpperCase()}</h1>`,
        body:_flogin(_.svKey),
        footer:modal_.btnClose("btn-secondary")
            +_btn({
                color:"primary shadow",
                judul:"Login",
                attr:"style='float:right; padding:5px;;' onclick='_logined()'",
                class:"btn btn-primary"
            })
    })
    $('#modalEx1').modal("show");
    // _modalEx1({
    //     judul:"SISTEM "+fjudul.toUpperCase(),
    //     icon:`<i class="mdi mdi-note-plus"></i>`,
    //     cform:`text-light`,
    //     bg:"bg-light",
    //     minWidth:"500px; ;",
    //     isi:_flogin(_.svKey),
    //     footer:_btn({
    //                 color:"primary shadow",
    //                 judul:"Close",
    //                 attr:`style='float:right; padding:5px;;' onclick="_modalHide('modal')"`,
    //                 class:"btn btn-secondary"
    //             })
    //             +_btn({
    //                 color:"primary shadow",
    //                 judul:"Login",
    //                 attr:"style='float:right; padding:5px;;' onclick='_logined()'",
    //                 class:"btn btn-primary"
    //             })
    // });
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