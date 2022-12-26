function _onload(data){
    // start 
    const main=document.querySelector("main");
    viewWebsite=_themaPublicView({
        menu:6,
        htmlKeterangan:style_.rowCol({
            clsRow:" container-fluid bwOpa6",
            col:[
                {
                    cls:"-12 p-2",
                    html:_form2()
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
function _form2(){
    hicon="200px";
    fsize="180px";

    infoSupport=[];
    infoSupport.push({name:"Alamat",value:'Jln. Bung Karno No. 5 Kompleks Kamutar Telu Kec. Taliwang - Kode Pos. 84455',icon:'<span class="mdi mdi-google-maps" style="font-size: 40px;color: chocolate;"></span>'});
    infoSupport.push({name:"No Telpon",value:'(0372) 8281424 - 8283219',icon:'<span class="mdi mdi-card-account-phone" style="font-size: 40px;color: cornflowerblue;"></span>'});
    infoSupport.push({name:"Gmail",value:'bappedalitbangksb@gmail.com',icon:'<span class="mdi mdi-gmail" style="font-size: 40px;color: yellowgreen;"></span>'});

    infoSupport1=[];
    infoSupport1.push({name:"Facebook",value:'bappedaKsb',icon:'<span class="mdi mdi-facebook" style="font-size: 40px;color: blue;"></span>'});
    infoSupport1.push({name:"Instagram",value:'bappedaKsb',icon:'<span class="mdi mdi-instagram" style="font-size: 40px;color: cornflowerblue;"></span>'});
    // infoSupport1.push({name:"Telegram",value:'bappedaKsb@gmail.com',icon:'<span class="mdi mdi-cellphone-basic" style="font-size: 40px;color: blue;"></span>'});
    infoSupport1.push({name:"Twitter",value:'bappedaKsb',icon:'<span class="mdi mdi-twitter" style="font-size: 40px;color: blue;"></span>'});
    infoSupport1.push({name:"Website",value:'https://bappedaKsb.com',icon:'<span class="mdi mdi-search-web" style="font-size: 40px;color: yellowgreen;"></span>'});

    return _sejajar({
        data:[{
            isi:`<div class="btn-block justify-content-center" 
                    style='background:white;border-radius: 20%;width:400px;margin:auto;'>`
                    +_textCenter({text:`<img src="`+assert+`/fs_css/logo/bupatiWakil22.jpg" alt="" style="height: `+hicon+`;">`})
                +`</div>`
                +_textCenter({text:`<h5 >
                        PEMERINTAHAN KABUPATEN <br> SUMBAWA BARAT
                    </h5>`
                })
        },{
            isi:_tbl2ColIcon(infoSupport,'',false)
        },{
            isi:`<div class="btn-block justify-content-center" 
                    style='background:white;color:black; border-radius: 50%;width:200px;margin:auto;'>`
                    +_textCenter({text:`<img src="`+assert+`/fs_css/logo/dev-blank.png" alt="" style="height: `+hicon+`;">`})
                +`</div>`
                +_textCenter({text:`<h5>
                        KEPALA BADAN PERENCANAAN<br> DAN PEMBANGUNAN DAERAH
                    </h5>`
                })
        }]
    })
    +_tbl2ColIcon(infoSupport1,'',true);
    // +_textCenter({text:` <a class="small" href="forgot-password.html">Forgot Password?</a>`})+
    //     _textCenter({text:` <a class="small" href="register.html">Create an Account!</a>`})
}