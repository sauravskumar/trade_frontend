pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        dockerfile {
          filename 'Dockerfile'
        }
        
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'ls'
        sh 'npm run start &'
      }
    }
    stage('Deploy') {
      agent {
        node {
          label 'master'
        }
        
      }
      steps {
        sh 'ls'
        sh 'pwd'
        sh 'docker ps -a && docker images'
      }
    }
  }
}