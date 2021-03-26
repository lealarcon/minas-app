

export class User {
	public id: number;
 	public realm: string;
 	public email: string;
	 	public password?: string;
	
	constructor(user?: any) {
		this.id = user ? user.id : null;
		this.realm = user ? user.realm : null;
		this.password = user ? user.password : null;
	}

}
