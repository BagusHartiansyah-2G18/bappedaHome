function _onload(data){
    $('#body').html(data.tmBody); 
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

    _.sfUrl='control/dashboard/';
}
function _form2(){
    hicon="40px";
    fsize="60px";
    fsizeW="160px";
   return `
    	<div class="formSet">
			<div class="form">
				<div class="info"> 
					<div class="groupicon" style="margin-top:15px;">
						<div class="subIcon">
							<h2>2025</h2>	
							<h6>Tahun Anggaran</h6>
						</div>
						<div class="subIcon">
							<h2>65</h2>	
							<h6>SKPD</h6>
						</div>
						<div class="subIcon">
							<h2>3</h2>	
							<h6>Tahapan</h6>
						</div>
					</div>
				</div>
				<div class="login">
					<div class="brand">
						<div class="nmApp">	
							<h1 class="h1-seo text-info">E RENJA</h1>
							<div class="nmKab">
								<span>BAPPEDA</span>
								<span>BADAN PERENCANAAN PEMBANGUNAN DAERAH</span>
								<span>SUMBAWA BARAT</span>
							</div>
						</div> 
					</div>
					${_flogin(true)}
					<div class="btnLogin">
						${
							_btn({
								color:"primary shadow",
								judul:"Login",
								attr:"style='float:right; padding:5px;;' onclick='_logined()'",
								class:"btn btn-primary"
							})
						}
					</div>
				</div>
			</div>
		</div>
	`;
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
    if(param.kdDinas=='-')return _toast({bg:'e',msg:'Pilih Dinas !!!'});
	if(_isNull(param.kdDinas))return _toast({bg:'e',msg:'Pilih Dinas !!!'});
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
