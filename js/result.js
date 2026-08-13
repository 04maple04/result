// ================================
// URLから結果を取得
// ================================

const params =
    new URLSearchParams(window.location.search);

const result =
    params.get("result");


// ================================
// 結果表示
// ================================

const resultDiv =
    document.getElementById("result");

if (result) {

    resultDiv.textContent = result;

    // 少し遅らせてアニメーション開始
    setTimeout(() => {

        resultDiv.classList.add("show");

    }, 300);

} else {

    resultDiv.textContent = "結果不明";

    resultDiv.classList.add("show");

}


// ================================
// くじに戻る
// ================================

document
    .getElementById("back-btn")
    .addEventListener("click", () => {

        window.location.href =
            "https://kujibiki-delta.vercel.app/";

    });


// ================================
// 集計サイトへ
// ================================

document
    .getElementById("summary-btn")
    .addEventListener("click", () => {

        window.location.href =
            "https://stock-manager-nine-eta.vercel.app/";

    });