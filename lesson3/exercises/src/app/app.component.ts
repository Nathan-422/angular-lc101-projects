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

  handleTakeOff(rocketImage: HTMLElement): void {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.grounded = false;
      this.color = "blue";
      // this.height = 10000;
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
        rocketImage.style.left = hPos + 10 + "px";
        this.width += 10000;
        break;
      case "left":
        rocketImage.style.left = hPos - 10 + "px";
        this.width -= 10000;
        break;
      case "up":
        rocketImage.style.bottom = vPos + 10 + "px";
        this.height += 10000;
        break;
      case "down":
        rocketImage.style.bottom = vPos - 10 + "px";
        this.height -= 10000;
        break;
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
