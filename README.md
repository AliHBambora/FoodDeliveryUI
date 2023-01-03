# FoodDeliveryUI

## Getting Started

### Steps to run the project

1.) Clone the repository using command 'git clone https://github.com/AliHBambora/FoodDeliveryUI.git' or directly download from the clone option on github.

2.) Once the clone is done , run 'npm install' in the project directory to install all the required dependencies of the project.

3). Run the project using 'npm start'.

## Project UI

![Alt text](/src/Assets/Images/ScreenShotUI.JPG)

# Atomic Design Pattern
The project follows atomic design pattern which imrpoves the readability, scalability and flexibility of your application code. The Atomic design pattern has proved to be remarkably suited for the componentised nature of React.

## Atomic Development
The five distinct levels of atomic design — atoms > molecules > organisms > templates > pages — map incredibly well to React’s component-based architecture.


![alt text](https://miro.medium.com/max/640/1*PcQ-m317YX6ct9ccBi6H1Q.webp)

### Atoms:

Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

### Molecules:

Grouping atoms together, such as combining a button, input and form label to build functionality.

### Organisms:

Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

### Templates:

Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

### Pages:

An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.

### Reason for Atomic Design Pattern

The main purpose of following the atomic design pattern when organising a React file structure is to isolate the environments of each feature component. When side-effects are isolated, code becomes a lot more readable and modular. A single instance of a feature will make testing more straightforward, thus improving the overall quality assurance of your application.