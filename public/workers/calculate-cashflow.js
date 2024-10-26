self.onmessage = (event) => {
  const data = event.data

  // Perform computations or operations here
  const result = data.num * 100

  // Send the result back to the main thread
  self.postMessage({ result })
}
