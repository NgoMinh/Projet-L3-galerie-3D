function Galerie (urlFile){
	var rooms = [];
	var urlmodel = urlFile;
	
	this.getUrlmodel = function(){ return (urlmodel); };
	this.getRooms = function(){ return (rooms); };
	this.getRoom = function(iDRoom){ return (rooms[iDRoom]) };
}


function Room (name,area){
	var roomName = name;
	var area;

	this.getRoomName = function(){ return (roomName); }
	this.getArea = function(){ return (area); }
}

function Area(Xmin,Xmax,Zmin,Zmax){
	var xMin = Xmin;
	var xMax = Xmax;
	var zMin = Zmin;
	var zMax = Zmax;

	this.getXMin = function(){ return (xMin); }
	this.getXMax = function(){ return (xMax); }
	this.getZMin = function(){ return (zMin); }
	this.getZMax = function(){ return (zMax); }

}

function ShowRoom(name,area,tailleExtension,nbObjetAjouterParExtension,nbObjetMaxSansExtension){
	Room.call(this,name,area);
	var artworks = [];
	var time = 0;
	var tailleExtension;
	var nbExtension = 0;
	var nbObjetMaxSansExtension;
	var nbObjetAjouterParExtension;

	this.getArtworks = function(){ return (artworks); }
	this.getArtwork = function(iDArtwork){ return artworks[iDArtwork] }
	this.getTime = function(){ return (time) }
	this.getNbExtension = function(){ return (nbExtension) }
	this.getTailleExtension = function(){ return (tailleExtension) }
	this.getNbObjetMaxSansExtension = function(){ return (nbObjetMaxSansExtension) }
	this.getNbObjetAjouterParExtension = function(){ return (nbObjetAjouterParExtension) }

	/*
	* fonction qui incrémente de 1 le temps
	*/
	this.incrementTime = function(){ 
		time += 1 
	};

	/*
	* fonction qui rajoute une oeuvre d'art dans la tableau
	* elle met à jour le nombre d'extension en appelant la fonction calculerNbExtension
	*/
	this.addArtwork = function(artwork){
		artworks.push(artwork);
		nbExtension = calculerNbExtension();
	};
	
	/*
	* fonction qui retourne le nombre d'extension par rapport 
	* aux nombres d'objets,
	* le nombre d'objet dans une salle sans extension,
	* et le nombre d'objet par extension
	*/
	function calculerNbExtension(){
		if(artworks.length > nbObjetMaxSansExtension){
			return Math.floor( (artworks.length-nbObjetMaxSansExtension)/nbObjetAjouterParExtension + (artworks.length-nbObjetMaxSansExtension)%nbObjetAjouterParExtension);
		}else{
			return 0;
		}
	}	
}


function Artwork(id,dimension,auteur,model3D,link){
	var id ;
	var dimension ;
	var auteur ;
	var model3D ;
	var link ;

	this.getId = function(){ return (id) }
	this.getDimension = function(){ return (dimension); }
	this.getAuteur = function(){ return (auteur); }
	this.getModel3D = function(){ return (model3D); }
	this.getLink = function(){ return (link); }
}

