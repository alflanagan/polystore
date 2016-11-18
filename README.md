# Polystore

System to unify cloud storage services, simulate single location with redundant storage.

| Is this the Polystore you wanted? |
| --------------------------------- |
| I've made some attempt to ensure that the name of this project isn't a duplicate. There is at least one other polystore project on github: [paultyng/polystore](https://github.com/paulytng/polystore). It is only two files and hasn't been updated since 2015.|
|Polystore is also the name given to a concept of storing big data in multiple databases: [The Case for Polystores](http://wp.sigmod.org/?p=1629). |

You've got documents, images, messages, etc. stored in [Google Drive](https://drive.google.com/drive/my-drive), [Box](https://box.com), [Dropbox](https://dropbox.com), etc., etc.
What if you could treat all these separate services like a single cloud drive? What if you could

* Designate priorities for files, high priority files are stored redundantly on multiple cloud services?
* Save space on the cloud by detecting and removing lower-priority duplicates?
* Replicate or backup all the files to local storage?
* Seamlessly add and remove cloud services?

## Current Status

We're only in the design and technology research stage so far.

## Technologies

* Need a relatively compact database format that is portable, can be stored on the cloud services, and is performant.
    * SQLLite?
* Need a language or languages that can implement background operations, portably, and a UI and browser interface.
    * will require some JavaScript
    * Can we do it all with [Node](https://nodejs.org/en/)?
    * Other candidate: [Python 3](https://www.python.org)
    
## Notes

Will need to define a common interface for the services, then write handlers for each service to translate into their particular API. Interface should be very abstract; in addition to standard files, want to be able to handle email messages, other storage paradigms (maybe a stretch goal).
