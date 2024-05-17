# Gallery Snapshot

Gallery Snapshot is a React application that allows users to search and browse images from Unsplash. It features a user-friendly interface with search functionality, pagination, and loading placeholders for a seamless user experience.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Components](#components)
5. [Dependencies](#dependencies)

# Features

- Search for images by category or keyword
- Display images with descriptions
- Pagination for browsing large sets of images
- Loading placeholders for better UX during data fetch
- Responsive design for mobile and desktop

# Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vundelavamsi/image-gallery
   cd gallery-snapshot
   ```
2. **Install dependencies:**

    ```bash
        npm install
    ```
3. **Run the application**
    ```bash
        npm start
    ```

# Usage

1. Search for Images:
    - Enter a keyword in the search bar and press the search button to find images related to that keyword.
    - Click on predefined category buttons like "Mountain", "Flowers", etc., to quickly search within those categories.
2. Browse Images:
    - Use the pagination controls at the bottom to navigate through the pages of images.

# Components

  - **App.js**: Main component that manages state and renders other components.
  - **Gallery.js**: Displays the list of images or a loading placeholder.
  - **Image.js**: Represents each image item with its description

# Dependencies

 - **React**: JavaScript library for building user interfaces.
 - **React Shimmer Effects**: Library for adding shimmer loading placeholders.
 - **React Paginate**: Library for pagination in React.
 - **Unsplash API**: Source of images.

