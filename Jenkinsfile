pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node'
          args '-p 3000:3000 --name trade_frontend -v /var/run/docker.sock:/var/run/docker.sock'
        }
        
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'ls'
        sh 'npm run start &'
        sh 'docker'
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
      }
    }
  }
}