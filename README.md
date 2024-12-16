
# Blog Ink & Ideas

Welcome to the **Blog Ink & Ideas** repository! This is a blog application built with **Next.js**, styled with **Tailwind CSS**, and tested using **Jest**. It's designed to provide a modern and responsive platform for reading and sharing blog posts.

Check out the live project here: [Blog Ink & Ideas](https://inknideas-natanbtaques-projects.vercel.app/home)

## Technologies Used

- **Next.js**: A React framework for building modern web applications with server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs with ease.
- **Jest**: A JavaScript testing framework used for writing unit tests to ensure the reliability of the application.

## Features

- Responsive design using Tailwind CSS.
- Fetches blog posts from an external API (Dummy JSON).
- Unit tests to verify the functionality of components and pages.

## API Consumption

This project consumes the following external API to fetch blog posts:

- **API Endpoint**: [https://dummyjson.com/posts/](https://dummyjson.com/posts/)

## Project Structure

The project is organized as follows:

```
/components
    - Reusable UI components (e.g., blog post previews, navigation bar)
/pages
    - Next.js pages (e.g., homepage, individual post pages)
/styles
    - Global styling files (Tailwind CSS configuration and custom styles)
/tests
    - Unit tests using Jest (for components, pages, and API calls)
/public
    - Public assets (images, fonts, etc.)
```

## How to Run the Project Locally

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-entre-linhas.git
   ```

2. **Install the dependencies**:
   ```bash
   cd blog-entre-linhas
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Running Tests

To run unit tests with Jest, use the following command:

```bash
npm test
```

Jest will run all the tests and display the results in the terminal.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
