pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        echo 'Test Stage'
      }
    }
    stage('Deploy') {
      agent {
        node {
          label 'master'
        }
        
      }
      steps {
        sh 'ls && pwd && cd /usr/src/app && ls && npm run start &'
      }
    }
  }
}