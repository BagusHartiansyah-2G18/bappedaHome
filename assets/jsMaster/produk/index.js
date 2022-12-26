function _onload(data){
    // start 
    judul.nm=data.nm;
    judul.nama=data.nama;
    judul.Logo=data.logo;
    judul.copyright=data.copyright;


    
    _.produk=data.produk;

    const main=document.querySelector("main");
    viewWebsite=_themaPublicView({
        menu:3,
        htmlKeterangan:style_.rowCol({
            clsRow:" container-fluid",
            col:[
                {
                    cls:"-10",
                    html:''
                },{
                    cls:"-2 p-3",
                    html:button_.ex1({
                          clsGroup:"",
                          listBtn :[
                            {
                              text:`<span class="mdi mdi-web text-light mdi-spin"></span>`,
                              cls:" btn-sm btn-dark",
                              attr:""
                            },{
                              text:"Informasi Publik",
                              cls:" btn-sm btn-warning ",
                              attr:""
                            }
                          ],
                        })
                }
            ]
        })
            
    });


    viewWebsite+=_formNoHeader({
        shadow:false,
        cls:"",
        id :"idContainer",
        style:`overflow-y: auto; padding:30px !important; padding-top:0px !important;  background-color:#b9b4b45e; margin-bottom:5px;`,
        kolom:[
            {
                size:"12",
                style:'padding: 10px;padding-top: 20px;',
                form:_sejajar({
                        attrCol:'style="margin: 0px !important;"',
                        data:[{
                            isi:_inpGroupPrepend({
                                icon:'</i><i class="mdi mdi-folder-upload"></i>',
                                bg:'bg-dark text-light',
                                placeholder:"",
                                attrSpan:`style="font-size: medium;"`,
                                isi:_inp({
                                        hint:"Search... Enter...",
                                        checked:undefined,
                                        attr:'onchange="_searchDoc(this)"',
                                        id:'search',
                                        type:'text',
                                        cls:undefined,
                                    })
                            })
                        },{
                            isi:_btn({
                                color:"primary",
                                judul:`<i class="mdi mdi-book-search"></i>Search`,
                                attr:"style='float:left;' onclick='_searchDoc(0)'",
                                class:"btn btn-primary "
                            })
                        }]
                    })
                    +`<div id='preview' style="margin: auto;">`
                        +_galeryx2({
                            row:3,
                            url:_urlMaster,
                            data:_.produk
                            // [
                            //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_css/w5.jpg'},
                            //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'},
                            //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'},
                            //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'},
                            //     {judul:'Badan Perencanaan Pembangunan Daerah',keterangan:'Penelitian dan Pengabdian (Bappeda dan Litbang) Kabupaten Sumbawa Barat (KSB), melaksanakan lomba penelitan tahun 2021',url:'lokeld',img:'/fs_sistem/slider/lap.PNG'}
                            // ],
                        })
                    +`</div>`
            }
        ]
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
}
function _searchDoc(v) {
    fjudul='';
    if(v!=0){
        fjudul=v.value;
    }else{
        fjudul=$('#search').val();
    }
    fdt=[];
    if(fjudul.length>0){
        _.produk.forEach((v)=> {
            if(_search(v.judul,fjudul)){
                fdt.push(v);
            }
        });
    }else{
        fdt=_.produk;
    }
    $('#preview').html(
        _galeryx2({
            row:3,
            url:_urlMaster,
            data:fdt
        })
    )
}
