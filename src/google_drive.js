var google = require('googleapis')

class GoogleDrive /* extends abstract file store? */ {

    // https://developers.google.com/drive/v3/reference/files/list
    get filesUrl() {
	return "https://www.googleapis.com/drive/v3/files"
    }
    // list arguments:
    //   corpus: "domain" or "user" (default)
    //   orderBy
    //   pageSize: maximum # to return per call (1-1000), default 100
    //   pageToken: value of 'nextPageToken' from the previous response.
    //   q: query filter
    //   spaces: comma-separated list: any of 'drive', 'appDataFolder', 'photos'.
    
}

