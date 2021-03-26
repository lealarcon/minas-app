

export class Products {
	public id: number;
 	public userId: number;
 	public title: string;
	 	public description?: string;
	
	constructor(user?: any) {
		this.id = user ? user.id : null;
		this.userId = user ? user.userId : null;
		this.title = user ? user.title : null;
		this.description = user ? user.description : null;
	}

}
