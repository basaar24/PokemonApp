import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  emails = ["gmail.com", "yahoo.com", "aol.com", "rocketmail.com", "outlook.com", "hotmail.com", "live.com", "lol.com"];
  value: any;
  placeholderValue: any;

  inputChange() {
    this.placeholderValue = "";
    const valueSplit = this.value.split("@");
    const domain = valueSplit && valueSplit.length > 1 ? valueSplit[1] : null;
    if (domain) {
      const filteredEmails = this.emails.filter(e => e.indexOf(domain) === 0);
      if (filteredEmails && filteredEmails.length > 0) {
        this.placeholderValue = this.value + filteredEmails[0].substring(domain.length);
      }
    }
    console.log(this.placeholderValue);
  }

  tabKeyPressed() {
    if (this.placeholderValue) {
      this.value = this.placeholderValue;
    }
  }
}

// https://stackoverflow.com/questions/63854661/autocomplete-suggestion-in-an-input-as-gray-letters-after-the-cursor-not-as-a-s
// https://www.freakyjolly.com/angular-simple-typeahead-autocomplete-suggestion-search-implementation-in-angular-6-applications/
// https://angular.io/guide/event-binding
