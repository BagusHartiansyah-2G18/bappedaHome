function _onload(data){
    const main=document.querySelector("main");
    viewWebsite=_themaPublicView({
        menu:5,
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
        cls:"",
        id :"idContainer",
        style:`background-image:url('`+assert+`fs_css/profil.png'); background-size: cover; height:1000px`,
        kolom:[
            {
                // size:"6",form:`<div  class='container' style="height: 100%;padding: 0px;margin: 0px;"></div>`
                size:"12",form:''
            // },{
            //     form:_form2(),
            //     // style:"background: rgba(41, 0, 74, 0.3);"
            }
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
    <div class="" style="min-height:1200px; width:600px;margin: auto;padding: 30px;">
    </div>`;
    // +_textCenter({text:` <a class="small" href="forgot-password.html">Forgot Password?</a>`})+
    //     _textCenter({text:` <a class="small" href="register.html">Create an Account!</a>`})
}