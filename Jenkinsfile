pipeline {
    agent any

    stages {
        // Stage to clone the repository
        stage('Clone Repository') {
            steps {
                git 'https://github.com/RiteshGupta19/Todo_docker_jenkins.git'  // Make sure your repo is public and the URL is correct
            }
        }

        // Stage to stop any existing containers
        stage('Stop existing containers') {
            steps {
                sh 'docker-compose down || true'  // Stops existing containers without throwing an error
            }
        }

        // Stage to rebuild Docker containers (to get fresh updates)
        stage('Rebuild Docker containers') {
            steps {
                sh 'docker-compose build --no-cache'  // Builds containers with no cache to ensure latest changes
            }
        }

        // Stage to start the containers after rebuild
        stage('Start containers') {
            steps {
                sh 'docker-compose up -d'  // Starts containers in detached mode
            }
        }
    }
}
