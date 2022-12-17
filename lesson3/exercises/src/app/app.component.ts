import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";
  grounded = true;
  

  handleTakeOff(rocketImage: HTMLElement, background: HTMLElement): void {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.grounded = false;
      this.color = "blue";
      this.moveRocket(rocketImage, "up")
      this.width = 0;
      this.message = "Shuttle in flight.";
    }
  }

  moveRocket(rocketImage: HTMLElement, direction: string): void {
    let hPos: number = parseInt(rocketImage.style.left);
    let vPos: number = parseInt(rocketImage.style.bottom);

    switch (direction) {
      case "right":
        hPos += 10;
        rocketImage.style.left = hPos + "px";
        this.width += 10000;
        break;
      case "left":
        hPos -= 10;
        rocketImage.style.left = hPos + "px";
        this.width -= 10000;
        break;
      case "up":
        vPos += 10;
        rocketImage.style.bottom = vPos + "px";
        this.height += 10000;
        break;
      case "down":
        vPos -= 10;
        rocketImage.style.bottom = vPos + "px";
        this.height -= 10000;
        break;
    }

    this.checkCoordinates(hPos, vPos);
  }

  checkCoordinates(hPos: number, vPos: number): void {
    if (
      vPos > 320 ||
      vPos < 10 &&
      !this.grounded ||
      hPos < -10 ||
      hPos > 460
    ) {
      this.color = 'red';
    } else if (
      vPos > 300 ||
      vPos < 20 &&
      !this.grounded ||
      hPos < 10 ||
      hPos > 440
    ) {
      this.color = 'orange';
    }else {
      this.color = 'blue';
    }
  }

  land(rocketImage: HTMLElement): void {
    let land = window.confirm("Are you ready to land?")
    if (land) {
      rocketImage.style.bottom = '0px'
      this.height = 0;
      this.color = 'green'
      this.grounded = true;
    }
  }
  abort(rocketImage: HTMLElement): void {
    window.alert("Abort sequence activated.")
    rocketImage.style.bottom = '0px'
    this.height = 0;
    this.color = 'green'
    this.grounded = true;
  }
}
