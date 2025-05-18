synchronous and asynchronous

sync blocks more tasks
asynch allows more tasks

async is important because many operations like fetching data from server, reading a file, and waiting for user to click a button takes time.

if JS waited for these, then the website will freeze.

-

promise

a promise handles async operations cleaner.

a promise has three states:
1. pending - initial sate; operation not yet completed
2. fulfilled - operation successful; promise has resulting value
3. rejected - operation failed; promise has reason for failure

promises typically are .then() and .catch()

.then(onFulfilled, onRejected)
    - onFulfilled gets the result if op is successful
    - onRejected gets the reason if op is unsucessful (optional, typically handled by .catch())

.catch(onRejected)
    - cleaner way to handle errors if the promise is rejected

chaining promises: .then() returns a new promise which allows chaining of async operations
