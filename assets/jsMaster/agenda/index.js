function _onload(data){
    _.dt=data.dt;
    _.agenda=data.agenda;
    _.data=undefined;
    _.indx=0;
    if(_.agenda.length>0){
        _.data=_.agenda[0];
    }
    

    
    const main=document.querySelector("main");
    viewWebsite=_themaPublicView({
        menu:2,
        htmlKeterangan:_formNoHeader({
                shadow:false,
                cls:" container-fluid text-dark bwOpa4",
                id :"idContainer",
                style:`overflow-y: auto; padding:30px !important;`,
                kolom:[
                    {
                        size:"7 ",form:_formIcon({
                                        icon:'<i class="mdi mdi-file-check"></i>'
                                        ,text:"Agenda Hari Ini",
                                        classJudul:"",
                                        // btn:infoSupport,
                                        isi:`<div id='tabelShow' style="margin: auto;">`
                                                +setTabel()
                                            +`</div>`,
                                        id:"form1",
                                        sizeCol:undefined,
                                    bgHeader:"bg-primary text-light",
                                    // attrHeader:`style="background-image: url('http://localhost:8080/sbm/assets/files/bsupport/bg_a6.jpg');"`,
                                    bgForm:"white"
                                    })
                        // size:"12",form:_form2()
                    },{
                        size:"5",form:`<div id='preview'>`
                                        +_form2()
                                    +`</div>`
                                        
                        // _form2()
                        // style:"background: rgba(41, 0, 74, 0.3);"
                    },
                    // ,{
                    //     size:"2",form:_tbl2ColIcon(infoSupport)
                    //     // style:"background: rgba(41, 0, 74, 0.3);"
                    // }
                ]
            })
            
    });


    viewWebsite+=
        _formIcon({
            icon:'<i class="mdi mdi-file-check"></i>'
            ,text:"Daftar Agenda",
            classJudul:" ",
            // btn:infoSupport,
        
            id:"form1",
            sizeCol:undefined,
            bgHeader:"bg-info text-light",
            // attrHeader:`style="background-image: url('http://localhost:8080/sbm/assets/files/bsupport/bg_a6.jpg');"`,
            bgForm:"#f4f4f4; padding: 20px;",
            isi:_inpSejajar({
                    attrRow:"margin-left:5px;margin-bottom:10px;",
                    attrCol:"margin-left:5px;margin-bottom:10px;",
                    attrLabel:"color:black",
                    judul:"",
                    isi:_inpGroupPrepend({
                            placeholder:"Agenda",
                            icon:'<i class="mdi mdi-rename-box "></i>',
                            bg:"bg-warning",
                            attrSpan:`style="width: 100px;"`,
                            isi:_inpComboBox({
                                id:"kdKategori", 
                                bg:"bg-dark text-light",
                                data:_.dt,
                                getCombo:true,
                                index:"Bagus H",
                                change:"_changeDtAgenda(this)"
                            }) 
                        }) 
                        +_inpGroupPrepend({
                            placeholder:"Mulai",
                            icon:'<i class="mdi mdi-rename-box "></i>',
                            bg:"bg-warning",
                            attrSpan:`style="width: 100px;"`,
                            isi:_inp({
                                hint:"tglS",
                                checked:undefined,
                                attr:`style="color:blue;" onchange="_chSearchTgl(this)"`,
                                id:'tglS',
                                type:'date',
                                cls:"form-control fzMfc",
                            })
                        })
                        +_inpGroupPrepend({
                            placeholder:"<i>Search</i>",
                            icon:'<i class="mdi mdi-rename-box "></i>',
                            bg:"bg-warning",
                            attrSpan:`style="width: 100px;"`,
                            isi:_inp({
                                hint:"search",
                                checked:undefined,
                                attr:`style="color:blue;" onchange="_chSearch(this)"`,
                                id:'search',
                                type:'text',
                                cls:"form-control fzMfc",
                            })
                        })
                })
                +_lines({})
                +`<div id='dtAgenda'>`
                    +_dtAgenda(_.dt[0].dt)
                +`</div>`
    })
    

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

    _startTabel("dt");
}
function setTabel(){
    infoSupport1=[];
     
    infoSupport1.push({ 
        clsBtn:`btn-outline-primary fzMfc`
        ,func:"_refreshAgendaNow()"
        ,icon:`<i class="mdi mdi-eye"></i>Preview`
        ,title:"Preview"
    });
    infoSupport1.push({ 
        clsBtn:`btn-outline-success fzMfc`
        ,func:"_goAgendaDetail()"
        ,icon:`<i class="mdi mdi-file-link"></i>Page`
        ,title:"Page"
    });
    
    return _tabelResponsive(
        {
            id:"dt"
            ,isi:_tabel(
                {
                    data:_.agenda
                    ,no:1
                    ,kolom:[
                        "judul","hari","tgl","waktu","tempat"
                    ]
                    ,namaKolom:[
                        "Judul","Hari","Tanggal","Waktu","Tempat"
                    ],
                    action:infoSupport1
                })
        });;
}
function _refreshAgendaNow(ind) {
    _.data=_.agenda[ind];
    $('#preview').html(_form2());
}
function _goAgendaDetail(ind) {
    _redirectOpen("agendad/"+btoa(JSON.stringify({kdAgenda:_.agenda[ind].kdAgenda,kdMember:_.agenda[ind].kdMember})));
}
function _form2(){
    if(_.data==undefined){
        return '';
    }
    infoSupport=[];
    infoSupport.push({
        name:"Hari / Tanggal",
        value:_.data.hari+" / "+_.data.tgl,
        icon:'<span class="mdi mdi-calendar" style="font-size: 50px;color: chocolate;"></span>'
    });
    infoSupport.push({
        name:"Waktu",
        value:_.data.waktu,
        icon:'<span class="mdi mdi-calendar-clock" style="font-size: 50px;color: cornflowerblue;"></span>'
    });
    infoSupport.push({
        name:"Tempat",
        value:_.data.tempat,
        icon:'<span class="mdi mdi-home-clock-outline" style="font-size: 50px;color: yellowgreen;"></span>'
    });
    return`<div style="text-align:center;">
            <h3>`+_.data.judul+`</h3>
        </div>`
        +_tbl2ColIcon(infoSupport,'',true)
        +_lines({})
        +`<div class="entry-content notopmargin post-gambar text-justify">
            `+_.data.keteranganS+`
        </div>`
        +(_.data.poster.length>0?
            `<div  class='container' style="height: auto;padding: 0px;margin:0px;" >`
                +`<img src="`+_urlMaster+`assets/fs_sistem/upload/image/`+_.data.img+`" alt="" width="100%">`
            +`</div>`
            :''
        )
}
function _changeDtAgenda(v) {
    _.indx=Number(v.value);
    return $('#dtAgenda').html(_dtAgenda(_.dt[_.indx].dt));
}
function _dtAgenda(fdt) {
    return _galeryx1({
        row:3,
        url:router,
        assets:_urlMaster,
        data:fdt
        // [
        //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
        //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
        //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
        //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'},
        //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld'}
        // ],
    });
}

function _chSearch(v) {
    fsearch=v.value;
    ftgl=$('#tglS').val();
    return exSearch(fsearch,ftgl);
}
function _chSearchTgl(v) {
    ftgl=v.value;
    fsearch=$('#search').val();
    return exSearch(fsearch,ftgl);
}
function exSearch(fsearch,ftgl) {
    fdt=[];
    _.dt[_.indx].dt.forEach((v,i) => {
        fkon=true;
        if(!_isNull(ftgl) && v.tglS!=ftgl){
            fkon=false;
        }
        if(!_isNull(fsearch) && !_search(v.judul,fsearch) && fkon){
            fkon=false;
        }

        if(fkon){
            fdt.push(v);
        }
    });
    console.log(fdt);
    return $('#dtAgenda').html(_dtAgenda(fdt));
}