function _onload(data){
    _.data=data.agenda;
    _urlMaster=router+"master/assets/fs_sistem/upload/image/agenda/";
    // _.agenda=data.agenda;

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
    // infoSupport.push({name:"",value:'Lomba Penelitian'});

    slider=[];
    // slider.push({url:assert+"fs_css/1.jpg",color:"margin-bottom:0px;margin-top: 5%;",id:"Iklan"});
    // slider.push({url:assert+"fs_css/2.jpg"});
    // _slider()
    
    if(_.data.posterF.length>0){
        if(_.data.img.length>0){
            slider.push({url:_urlMaster+_.data.img,color:"margin-bottom:0px;margin-top: 5%;",id:"Iklan"});
        }
        split=_.data.posterF.split("/");
        split.forEach((v1) => {
            if(slider.length==0){
                slider.push({url:_urlMaster+v1,color:"margin-bottom:0px;margin-top: 5%;",id:"Iklan"});
            }else{
                slider.push({url:_urlMaster+v1});
            }
        });
    }else{
        if(_.data.img.length>0){
            slider.push({url:_urlMaster+_.data.img,color:"margin-bottom:0px;margin-top: 5%;",id:"Iklan"});
        }else{
            slider.push({url:assert+'fs_css/bgx.png',color:"margin-bottom:0px;margin-top: 5%;",id:"Iklan"});
        }
        
    }

    const main=document.querySelector("main");
    viewWebsite=_themaPublicView({
        menu:2,
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
        shadow:true,
        cls:" text-dark",
        id :"idContainer",
        style:`overflow-y: auto; padding:30px !important;`,
        kolom:[
            {
                size:"6",form:_tbl2ColIcon(infoSupport,'',true)
                                +`<div  class='container' style="height: 500px;padding: 0px;margin:0px;background: rgba(0, 0, 0, 0.3);" >`
                                +_slider()
                                // +`<img src="`+(_.data.img.length>0?_urlMaster+`assets/fs_sistem/upload/image/`+_.data.img:assert+'fs_css/bgx.png')+`" alt="" width="100%">`
                                +`</div>`
                // size:"12",form:_form2()
            },{
                size:"6",form:_form2()
                // style:"background: rgba(41, 0, 74, 0.3);"
            },
            // ,{
            //     size:"2",form:_tbl2ColIcon(infoSupport)
            //     // style:"background: rgba(41, 0, 74, 0.3);"
            // }
        ]
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
function _form2(){
    hicon="60px";
    fsize="80px";
   return `
            <div  style="max-height: 500px;">
                <div style="text-align:center;">
                    <h3>`+_.data.judul+`</h3>
                    `+_lines({ attr:'background:white;'})+`
                </div>

                <div class="entry-content notopmargin post-gambar text-justify">
                    `+(_.data.keteranganE.length>0?_.data.keteranganE:_.data.keteranganS)+`
                </div><!-- Entry Content
                ============================================= -->
                


                </div>
   `;
    // +_textCenter({text:` <a class="small" href="forgot-password.html">Forgot Password?</a>`})+
    //     _textCenter({text:` <a class="small" href="register.html">Create an Account!</a>`})
}