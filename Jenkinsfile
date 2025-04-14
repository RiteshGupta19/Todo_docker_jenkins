pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://RiteshGupta19/Todo_docker_jenkins.git'
            }
        }

        stage('Stop existing containers') {
            steps {
                sh 'docker-compose down || true'
            }
        }

        stage('Rebuild Docker containers') {
            steps {
                sh 'docker-compose build --no-cache'
            }
        }

        stage('Start containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
