// 作業時間（25分）をミリ秒で表す
const WORK_TIME_MS = 25 * 60 * 1000;

const timerElement = document.getElementById("timer");

// 終了時刻を決めておき、毎回「終了時刻 − 今の時刻」で残り時間を計算する
// （1秒ずつ引き算するより、時間がずれにくい）
const endTime = Date.now() + WORK_TIME_MS;

// 残り時間（ミリ秒）を「MM:SS」の形の文字列にする
function formatTime(ms) {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function tick() {
  const remaining = Math.max(endTime - Date.now(), 0);
  timerElement.textContent = formatTime(remaining);

  // 00:00 になったら止める
  if (remaining === 0) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(tick, 250);
tick();
