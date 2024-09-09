# Accorpora Anime Site

Accorpora Anime Site is a web application that allows users to search and watch anime. It includes features such as popular anime listings, pagination, user login via GitHub, and personal anime collections with the ability to leave comments.

## Preview

You can view a live demo of the Accorpora Anime Site at the following URL:

- [Accorpora Anime Site Preview](https://accorpora-anime-site.vercel.app/)

## Features

- **Search and Watch Anime**: Users can search for their favorite anime and watch available episodes.
- **Popular Anime**: Displays a list of popular anime.
- **Pagination**: Pagination for browsing through the entire anime list.
- **GitHub Login**: Users can log in using their GitHub accounts.
- **Save to Collection**: After logging in, users can save anime to their personal collection.
- **Comments**: Users can leave comments on their favorite anime.

## Technologies Used

- **Next.js**: Framework for building the React application.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Prisma**: ORM for database management.
- **Vercel**: Deployment platform for hosting the application.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Antonius1712/accorpora-anime-site.git
    cd accorpora-anime-site
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:

    Create a `.env.local` file in the root directory of the project and add the following variables:

    ```env
    DATABASE_URL=your_database_url
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    ```

4. **Run Migrations**:

    ```bash
    npx prisma migrate dev
    ```

5. **Start the Development Server**:

    ```bash
    npm run dev
    ```

    The application will be running at `http://localhost:3000`.

## Deployment

The project is deployed using Vercel. To deploy the project to Vercel, follow these steps:

1. **Push Your Changes**:

    ```bash
    git add .
    git commit -m "Your commit message"
    git push origin main
    ```

2. **Connect to Vercel**:

    - Go to [Vercel](https://vercel.com/) and log in with your account.
    - Import the repository from GitHub.
    - Follow the prompts to set up and deploy the application.

## Usage

- **Visit the Website**: Navigate to the deployed URL to start using the application.
- **Search for Anime**: Use the search bar to find anime.
- **Log In**: Use the GitHub login button to authenticate.
- **Save to Collection**: Save anime to your personal collection after logging in.
- **Leave Comments**: Add comments to anime listings.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: antonius1712@gmail.com
- **Phone**: +6281297275563
- **LinkedIn**: [Antonius Christian](https://www.linkedin.com/in/antonius-christian/)

You can also report issues or ask questions on the [GitHub Issues page](https://github.com/Antonius1712/accorpora-anime-site/issues).

