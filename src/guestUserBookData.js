const _BOOKS = [
	{
		author: ["Alice Walker"],
		id: "0151191549 387",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=hTy7QzxZSEUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=hTy7QzxZSEUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "The Color Purple",
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		genres: ["Fiction"],
		dateAdded: 1672083797118,
	},
	{
		author: ["Mary Chelley"],
		id: "1847493505 321",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=kIAVnwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=kIAVnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		},
		title: "Frankenstein",
		readStatus: "Read",
		notes: [],
		review: "",
		rating: 4,
		genres: ["Fiction"],
		dateAdded: 1672083986205,
	},
	{
		author: ["Jane Austen"],
		id: "1853260002 939",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=5GbdTc9OJ78C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=5GbdTc9OJ78C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "Pride and Prejudice",
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		genres: ["Fiction"],
		dateAdded: 1672083897326,
	},
	{
		author: ["Gabriel Garcia Marquez"],
		id: "9780060531041 772",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=pgPWOaOctq8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=pgPWOaOctq8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "One Hundred Years of Solitude",
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		genres: ["Fiction"],
		dateAdded: 1672083292720,
	},
	{
		author: ["Harper Lee"],
		id: "9780099466734 20",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=JQGv8eqVMrMC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=JQGv8eqVMrMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		},
		title: "To Kill a Mockingbird",
		genres: ["Fiction"],
		readStatus: "Read",
		notes: [],
		review: "",
		rating: 3,
		dateAdded: 1672083260558,
	},
	{
		author: ["E.M. Forster"],
		id: "9780241214992 957",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=OLuMEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=OLuMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		},
		title: "A Passage To India",
		genres: ["Fiction"],
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		dateAdded: 1672083405215,
	},
	{
		author: ["Toni Morrison"],
		id: "9780307264886 222",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=ppfYf0K6fcoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=ppfYf0K6fcoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "Beloved",
		genres: ["Fiction"],
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		dateAdded: 1672083536947,
	},
	{
		author: ["J. D. Salinger"],
		id: "9780316460002 355",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=FqSiDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=FqSiDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "The Catcher in the Rye",
		genres: ["Fiction"],
		readStatus: "Read",
		notes: [],
		review: "",
		rating: 2,
		dateAdded: 1672083884574,
	},
	{
		author: ["William Faulkner"],
		id: "9780679600176 469",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=Pda2Kq6zgKAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=Pda2Kq6zgKAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "The Sound and the Fury",
		genres: ["Fiction"],
		readStatus: "Read",
		notes: [],
		review: "",
		rating: 5,
		dateAdded: 1672083944504,
	},
	{
		author: ["Ralph Ellison"],
		id: "9780679732761 177",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=foSLDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=foSLDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "Invisible Man",
		genres: ["Fiction"],
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		dateAdded: 1672083430006,
	},
	{
		author: ["F. Scott Fitzgerald"],
		id: "9780762498147 718",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=7iXhDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=7iXhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "The Great Gatsby: A Novel",
		genres: ["Fiction"],
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		dateAdded: 1672083868446,
	},
	{
		author: ["Leo Tolstoy"],
		id: "9781101042472 432",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=W4r7lF_MSMYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=W4r7lF_MSMYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		},
		title: "Anna Karenina",
		genres: ["Fiction"],
		readStatus: "Reading",
		notes: [],
		review: "",
		rating: "",
		dateAdded: 1672083121991,
	},
	{
		author: ["Chinua Achebe"],
		id: "STANFORD:36105007495679 611",
		thumbnail: {
			smalltThumbnail:
				"http://books.google.com/books/content?id=yz0GAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
			thumbnail:
				"http://books.google.com/books/content?id=yz0GAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		},
		title: "Things Fall Apart",
		genres: ["Fiction"],
		readStatus: "Unread",
		notes: [],
		review: "",
		rating: "",
		dateAdded: 1672083709478,
	},
];

export default _BOOKS;
