var DBMeter = {

  /**
  * Delete the plugin.
  * Remove its native instance from the memory.
  *
  * @param  {success} callback in case of success
  * @param  {error} callback in case of error
  */
  delete: function(success, error) {

// TODO
    // TODO
    error("not implemented yet");

  },

  /**
  * Starts listening the audio signal.
  *
  * Returns the current decibel value from the success callback parameter
  * as a float value.
  * @param  {success} callback in case of success
  * @param  {error} callback in case of error
  */
  start: function(success, error) {

    // TODO
    error("not implemented yet");
  },

  /**
  * Stops listening any audio signal.
  *
  * @param  {success} callback in case of success
  * @param  {error} callback in case of error
  */
  stop: function(success, error) {
    // TODO
    error("not implemented yet");
  },

  /**
  * Returns whether the DBMeter is listening.
  *
  * @param  {success} callback in case of success
  * @param  {error} callback in case of error
  */
  isListening: function(success, error) {
    // TODO
    error("not implemented yet");
  }
};

DBMeter.ERROR_CODES = {
  '0':'DBMETER_NOT_INITIALIZED',
  '1':'DBMETER_NOT_LISTENING'
};

module.exports = DBMeter;

require('cordova/exec/proxy').add('DBMeter', module.exports);
