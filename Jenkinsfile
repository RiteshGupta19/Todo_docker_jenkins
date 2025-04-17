pipeline {
    agent any

    environment {
        DEPENDENCY_CHECK_DIR = './dependency-check'
        REPORTS_DIR = './reports'
        scannerHome = tool 'Sonar'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/RiteshGupta19/Todo_docker_jenkins.git'
            }
        }

        stage('Stop existing containers') {
            steps {
                sh 'docker-compose down || true'
            }
        }

           stage('SonarQube Analysis') {
    environment {
        SONAR_TOKEN = credentials('Sonar')
    }
    steps {
        withSonarQubeEnv('Sonar') {
            sh '''
                /var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/Sonar/bin/sonar-scanner \
                -Dsonar.projectKey=todo-app \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://localhost:9000 \
                -Dsonar.login=$SONAR_TOKEN
            '''
        }
    }
}

        // stage('Install OWASP Dependency-Check') {
        //     steps {
        //         sh '''
        //             if [ ! -d "${DEPENDENCY_CHECK_DIR}" ]; then
        //                 wget https://github.com/jeremylong/DependencyCheck/releases/download/v8.4.0/dependency-check-8.4.0-release.zip
        //                 unzip dependency-check-8.4.0-release.zip -d .  # Unzipping the downloaded file
        //                 mv dependency-check dependency-check
        //             fi
        //         '''
        //     }
        // }

        // stage('Run OWASP Dependency-Check') {
        //     steps {
        //         sh '''
        //             mkdir -p ${REPORTS_DIR}
        //             ${DEPENDENCY_CHECK_DIR}/bin/dependency-check.sh \
        //                 --project "todo-app" \
        //                 --scan . \
        //                 --format HTML \
        //                 --out ${REPORTS_DIR}
        //         '''
        //     }
        // }

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

         
        // stage('Run Trivy Scan - Backend') {
        //     steps {
        //         sh 'trivy image ritesh0419/todo-backend:latest'
        //     }
        // }

        // stage('Run Trivy Scan - Frontend') {
        //     steps {
        //         sh 'trivy image ritesh0419/todo-frontend:latest'
        //     }
        // }

        // stage('Run Trivy Scan - MongoDB') {
        //     steps {
        //         sh 'trivy image mongo:4.4'
        //     }
        // }
    }   

    post {
        always {
            archiveArtifacts artifacts: 'reports/*.html', allowEmptyArchive: true
        }
    }
}


// pipeline {
//     agent any

//     environment {
//         DEPENDENCY_CHECK_DIR = './dependency-check'
//         REPORTS_DIR = './reports'
//     }

//     stages {
//         stage('Clone Repository') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/RiteshGupta19/Todo_docker_jenkins.git'
//             }
//         }

//         stage('Stop existing containers') {
//             steps {
//                 sh 'docker-compose down || true'
//             }
//         }

//         stage('Install OWASP Dependency-Check') {
//             steps {
//                 sh '''
//                     if [ ! -d "${DEPENDENCY_CHECK_DIR}" ]; then
//                         wget https://github.com/jeremylong/DependencyCheck/releases/download/v8.4.0/dependency-check-8.4.0-release.zip
//                         unzip dependency-check-8.4.0-release.zip -d .
//                         mv dependency-check dependency-check
//                     fi
//                 '''
//             }
//         }

//         stage('Run OWASP Dependency-Check') {
//             steps {
//                 sh '''
//                     mkdir -p ${REPORTS_DIR}
//                     ${DEPENDENCY_CHECK_DIR}/bin/dependency-check.sh \
//                         --project "todo-app" \
//                         --scan . \
//                         --format HTML \
//                         --out ${REPORTS_DIR}
//                 '''
//             }
//         }

//         stage('Rebuild Docker containers') {
//             steps {
//                 sh 'docker-compose build --no-cache'
//             }
//         }

//         stage('Start containers') {
//             steps {
//                 sh 'docker-compose up -d'
//             }
//         }
//     }

//     stage('Run Trivy Scan - Backend') {
//             steps {
//                 sh 'trivy image ritesh0419/todo-backend:latest'
//             }
//         }

//         stage('Run Trivy Scan - Frontend') {
//             steps {
//                 sh 'trivy image ritesh0419/todo-frontend:latest'
//             }
//         }

//         stage('Run Trivy Scan - MongoDB') {
//             steps {
//                 sh 'trivy image mongo:4.4'
//             }
//         }
//     }


//     post {
//         always {
//             archiveArtifacts artifacts: 'reports/*.html', allowEmptyArchive: true
//         }
//     }
// }
