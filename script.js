function StartGame() {
  const name =
    document.getElementById("name").value.trim();
  const allowedNames = ["เหนือ","เฟิร์น","nuea","nueani","Nuea","Nueani"];
  const message =
    document.getElementById("message");

  if (allowedNames.includes(name)) {
    document.querySelector("main").innerHTML =
      `
      <div class="cake">🎂</div>
      <h1>Happy Birthday Na</h1>
      <p>สุขสันต์วันเกิดครับเพื่อน</p>

      <div class="wish">
        long time no talk buddy<br>
        ขอให้ปีนี้เป็นปีที่ดีนะ<br>
        คิดอะไรหวังอะไรก็ขอให้สมหวังดังปราถนา<br>
        ขอให้ติดมหาลัยที่อยากได้ขอให้พบเจอแต่สิ่งดีๆ<br>
        last thing ill always support you cuh
      </div>
      `;
  } else{
    message.textContent="Try again😭";
  }
}