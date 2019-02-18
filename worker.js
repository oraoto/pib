self.onmessage = function (evt) {
  // If we've been asked to call the module's Add method then...
  var objData = evt.data;
  var sMessagePurpose = objData.MessagePurpose;
  if (sMessagePurpose === "AddValues") {
    // Call the add method in the WebAssembly module and pass the result back to the main thread
    var iResult = g_objInstance.exports._add(objData.Val1, objData.Val2);
    self.postMessage(`This is the Web Worker...The result of ${objData.Val1.toString()} + ${objData.Val2.toString()} is ${iResult.toString()}.`);
  } else if (sMessagePurpose === "CompiledModule") {
    // NOTE: Unlike when we pass in the bytes to instantiate, we don't have a separate 'instance'
    // and 'modules' object returned in this case since we started out with the module object.
    // We're only passed back the instance in this case.
    WebAssembly.instantiate(objData.WasmModule, g_importObject).then(instance => 
      g_objInstance = instance // Hold onto the module's instance so that we can reuse it
    );
  }
}