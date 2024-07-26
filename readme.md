## StickerSmash:

### Overview

**StickerSmash** is a React Native app built using Expo, designed to introduce developers to the Expo SDK and fundamental React Native concepts. The app allows users to select an image from their device, add stickers from a modal, manipulate sticker positions, and finally, save the edited image.

### App Preview

![App Preview](./assets/preview.gif)

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhay2133/StickerSmash.git
   ```

2. **Install dependencies:**
   ```bash
   cd sticker-smash
   npm install
   ```

3. **Run the app:**
   ```bash
   npx expo start
   ```

### App Structure

The app is organized into several components:

* **App.js:** Main entry point of the app, handling overall state and navigation.
* **ImagePicker.js:** Handles selecting an image from the device's media library.
* **StickerModal.js:** Displays a modal with a list of stickers.
* **Sticker.js:** Represents an individual sticker with touch handling.

### Key Features

* **Image Selection:** Uses platform-specific image picker APIs to allow users to choose an image.
* **Sticker Modal:** Presents a modal with a list of stickers that can be added to the image.
* **Sticker Manipulation:** Enables users to drag, resize, and rotate stickers.
* **Screenshot and Save:** Captures a screenshot of the edited image and saves it to the device.
* **Platform-Specific Handling:** Addresses differences between Android, iOS, and web platforms.
* **App Customization:** Configures status bar, splash screen, and app icon for a polished look.

### Technologies Used

* **Expo:** Rapid mobile app development platform.
* **React Native:** Cross-platform mobile app framework.
* **Flexbox:** Layout system for building responsive UI.
* **Image Picker:** Native image picker API.
* **Modal and FlatList:** React Native components for creating modals and lists.
* **Gesture Handler:** For handling touch interactions on stickers.
* **Third-party libraries:** For screenshot capturing and saving.

### Contributing

Feel free to contribute to this project by:

* Reporting issues
* Suggesting improvements
* Adding new features

### License

This project is licensed under the MIT License.

**Note:** Replace `your-username` with your actual GitHub username. You can also add more details about the project, such as specific libraries used, challenges faced during development, or future plans.

**Additional Tips:**

* Include screenshots or a short video demonstration of the app.
* Provide clear instructions on how to run the app and any dependencies.
* Consider adding a section on troubleshooting common issues.
* Use code snippets and examples to illustrate key features.

By following these guidelines, you can create a comprehensive and informative README file for your StickerSmash app.
 
**Would you like to add more details to the README, such as specific libraries used or challenges faced during development?** 
