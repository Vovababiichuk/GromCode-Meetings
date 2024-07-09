
// Бенефіти класів:

// Наслідування
// Інкапсуляція
// Поліморфізм

// класи розширюють можливості звичайних обьектів

export class User extends Array {
	// Properties
	#isAdmin = false;
	
	// Constructor
	constructor(id, firstName, lastName) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;

		// this дає доступ до всіх частин класу
		// console.log('this', this);
	}

	// Methods
	// get, set - для керуванням properties класу

	get getId() {
		return this.id;
	}

	get getIsAdmin() {
		return this.#isAdmin;
	}

	set setIsAdmin(value) {
		console.log('setter worked');
		if (typeof value !== 'boolean') {
			console.log('wrong value');
			return;
		}
		this.#isAdmin = value;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}