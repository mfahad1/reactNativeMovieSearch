import Datastore from 'react-native-local-mongodb';
singleDb = new Datastore({filename: 'asyncStorageKey', autoload: true});

export default class MongoLocalStorage {
		constructor() {
			let collection = [];
			singleDb.find({}, function (err, docs) {
				console.log('found',docs);
				if(docs.length === 0){
					collection = [
						{
								type: 'allData',
								payload: []
						},
						{
								type: 'upLoaded',
								payload: []
						},
						{
								type: 'toBeUploaded',
								payload: []
						}
					];
					singleDb.insert(collection, function (err, newDoc) {
							console.log("inserted", newDoc);
					});
				}
			});				
		}

		insertDataIn(key, data) {

			singleDb.update({type: key}, {
													$push:  { payload:data}
											}, {}, function (err, newdoc) {

			});
		}

		getData(key){
			singleDb.find({ type: key }, function (err, docs) {
				console.log("getting key",docs);
			});
		}
}