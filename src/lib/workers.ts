export function createCalculateCashflowWorker() {
  return new Worker('/workers/calculate-cashflow.js')
}
